import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/orders.json");

// Ensure directory and file exist
const ensureDataFile = () => {
  const dir = path.dirname(DATA_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, JSON.stringify([]));
  }
};

export async function POST(req: Request) {
  try {
    ensureDataFile();
    const orderData = await req.json();
    
    const newOrder = {
      ...orderData,
      id: `AM-${Math.floor(100000 + Math.random() * 900000)}`,
      status: "received",
      createdAt: new Date().toISOString(),
      notes: orderData.notes || "",
      rider: {
        name: "Amigos Rider",
        phone: "0333-3985700",
        progress: 0,
      }
    };

    const orders = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    orders.push(newOrder);
    fs.writeFileSync(DATA_PATH, JSON.stringify(orders, null, 2));

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}

export async function GET() {
  try {
    ensureDataFile();
    const orders = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
