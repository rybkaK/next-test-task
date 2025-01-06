import Link from "next/link";
import Search from "./components/search";
import ProductSvc from "./services/ProductSvc";
import Image from "next/image";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const products = await ProductSvc.getAll(query);
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="container mx-auto flex justify-between flex-col items-start pt-4 pb-4  min-h-screen">
          <h1 className="text-2xl text-text font-bold mb-6">Our Products</h1>
          <div className="mb-6">
            <Search />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg overflow-hidden group transition-all hover:scale-105"
              >
                <Link href={`/products/${product.id}`} passHref>
                  <div className="block">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={175}
                      height={175}
                      quality={90}
                      className="w-full h-64 object-cover group-hover:opacity-80 transition-all"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-primary mb-2">
                        {product.name}
                      </h2>
                      <p className="text-sm text-secondary mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-text">
                          ${product.price.toFixed(2)}
                        </p>
                        <p className="text-sm text-accent">
                          {product.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
  );
}
