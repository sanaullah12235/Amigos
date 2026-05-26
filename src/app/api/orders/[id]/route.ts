import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/orders.json");

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!fs.existsSync(DATA_PATH)) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const orders = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    const order = orders.find((o: any) => o.id === id);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Only auto-update progress if it's already in a "moving" state 
    // and not being manually controlled by admin yet.
    // For now, let's keep the admin in control.
    
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (!fs.existsSync(DATA_PATH)) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const orders = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    const index = orders.findIndex((o: any) => o.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    orders[index] = { 
      ...orders[index], 
      ...body,
      updatedAt: new Date().toISOString() 
    };
    
    fs.writeFileSync(DATA_PATH, JSON.stringify(orders, null, 2));
    return NextResponse.json(orders[index]);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!fs.existsSync(DATA_PATH)) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const orders = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    const filteredOrders = orders.filter((o: any) => o.id !== id);

    if (orders.length === filteredOrders.length) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    fs.writeFileSync(DATA_PATH, JSON.stringify(filteredOrders, null, 2));
    return NextResponse.json({ message: "Order deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
