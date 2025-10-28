import Link from "next/link";
import { notFound } from "next/navigation";
import list from "../../../data/list.json";

type Product = {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  lastUpdated: string;
};

const products = list as unknown as Product[];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/" className="text-sm text-muted hover:underline">
          ← Back to products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="rounded-lg overflow-hidden bg-muted/10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        <aside className="md:col-span-1 bg-card border border-border rounded-lg p-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="text-muted mt-1">{product.category}</div>

          <div className="mt-4 text-3xl font-bold">${product.price.toFixed(2)}</div>

          <div className="mt-4">
            <button
              className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium"
              disabled={product.inventory === 0}
            >
              {product.inventory > 0 ? "Add to cart" : "Out of stock"}
            </button>
          </div>

          <div className="text-xs text-muted mt-3">Inventory: {product.inventory}</div>
          <div className="text-xs text-muted mt-1">Updated: {new Date(product.lastUpdated).toLocaleString()}</div>
        </aside>
      </div>

      <section className="mt-6 bg-card border border-border rounded-lg p-4">
        <h2 className="text-lg font-semibold">Details</h2>
        <p className="mt-2 text-muted">{product.description}</p>
      </section>
    </main>
  );
}
