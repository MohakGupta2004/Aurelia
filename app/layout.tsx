import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-logo",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurelia Commerce — Curated goods",
  description: "Aurelia Commerce showcases a curated collection of everyday essentials — minimal, modern, and beautifully crafted.",
  keywords: ["commerce", "ecommerce", "products", "aurelia", "shop"],
  authors: [{ name: "Aurelia Team", url: "https://example.com" }],
  openGraph: {
    title: "Aurelia Commerce — Curated goods",
    description: "Aurelia Commerce showcases a curated collection of everyday essentials — minimal, modern, and beautifully crafted.",
    siteName: "Aurelia Commerce",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}
