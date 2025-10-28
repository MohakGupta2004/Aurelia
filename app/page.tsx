import Link from "next/link";
import list from "../data/list.json";

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

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <header className="mb-6">
        <h1 style={{ fontFamily: "var(--font-logo)" }} className="text-4xl font-bold">Products</h1>
        <p className="text-muted mt-1">A showcase of our catalog — click a product to view details.</p>
      </header>

      <section className="min-h-screen">
        {/* Redesigned bento mosaic: distinct hero and a taller second tile occupying multiple rows.
            Uses a 6-column grid on large screens and explicit col/row spans for the first items. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[180px] lg:auto-rows-[220px]">
          {products.map((p, i) => {
            const span = (() => {
              switch (i) {
                case 0:
                  return "lg:col-span-3 lg:row-span-2"; // hero: wide
                case 1:
                  return "lg:col-span-2 lg:row-span-2"; // tall accent: slightly wider (2 cols)
                case 2:
                  return "lg:col-span-1 lg:row-span-1"; // small tile
                case 3:
                  return "lg:col-span-1 lg:row-span-1"; // small tile
                case 4:
                  return "lg:col-span-2 lg:row-span-1"; // medium
                default:
                  return "lg:col-span-2 lg:row-span-1"; // fallback
              }
            })();

            const isHero = i === 0;
            const isTall = i === 1;

            return (
              <article
                key={p.id}
                className={`relative overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl ${span}`}
              >
                <Link href={`/product/${p.slug}`} className="block h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                    />

                    <div className={`absolute inset-0 ${isHero ? 'bg-linear-to-t from-black/60 via-black/30 to-transparent dark:from-white/8' : 'bg-linear-to-t from-black/36 to-transparent dark:from-white/6'}`} />

                    <div className={`absolute left-6 right-6 ${isHero ? 'bottom-10' : isTall ? 'bottom-6' : 'bottom-4'}`}>
                      <h3 style={{ fontFamily: 'var(--font-logo)' }} className={`${isHero ? 'text-3xl lg:text-4xl' : 'text-lg lg:text-xl'} font-bold text-white drop-shadow-sm`}>{p.name}</h3>
                      <p className={`${isHero ? 'mt-3 text-sm lg:text-base' : 'mt-2 text-xs'} max-w-2xl text-white/90 line-clamp-3`}>{p.description}</p>
                    </div>

                    <div className="absolute right-5 top-5 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">${p.price.toFixed(2)}</div>
                  </div>

                  <div className="p-4 bg-card border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted capitalize">{p.category}</div>
                      <div className="text-sm font-medium text-foreground">{p.inventory > 0 ? `${p.inventory} in stock` : 'Out of stock'}</div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
