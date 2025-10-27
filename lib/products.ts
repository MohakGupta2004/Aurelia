export type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  specs?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "zenbook-14",
    name: "ZenBook 14 Pro",
    price: "$1,299",
    image: "/file.svg",
    specs: ['14" Display', 'Intel i7', '16GB RAM'],
  },
  {
    slug: "ultraforce-15",
    name: "Ultraforce 15",
    price: "$1,499",
    image: "/globe.svg",
    specs: ['15.6" Display', 'AMD Ryzen 7', '32GB RAM'],
  },
  {
    slug: "paperclip-stand",
    name: "Magnetic Laptop Stand",
    price: "$79",
    image: "/next.svg",
    specs: ["Aluminum", "Foldable"],
  },
  {
    slug: "hyperdock",
    name: "HyperDock Pro",
    price: "$129",
    image: "/window.svg",
    specs: ["USB-C", "Ethernet", "4K HDMI"],
  },
  {
    slug: "aurora-bag",
    name: "Aurora Sleeve",
    price: "$59",
    image: "/vercel.svg",
    specs: ["13-16 inch", "Water resistant"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
