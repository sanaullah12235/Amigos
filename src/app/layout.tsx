import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Amigos Fast Food | Premium Pizza & Burgers",
  description: "Experience the ultimate fast food luxury with Amigos Fast Food. Premium pizzas, burgers, and more, delivered with style.",
  openGraph: {
    title: "Amigos Fast Food | Premium Pizza & Burgers",
    description: "The Art of Premium Pizza. Experience the ultimate fast food luxury.",
    url: "https://amigosfood.com",
    siteName: "Amigos Fast Food",
    images: [
      {
        url: "https://amigosfood.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Amigos Fast Food",
  "image": "https://amigosfood.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Luxury Avenue",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "url": "https://amigosfood.com",
  "telephone": "+123456789",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "23:00"
    }
  ],
  "menu": "https://amigosfood.com/menu",
  "servesCuisine": ["Pizza", "Burgers", "Fast Food"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-midnight text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
