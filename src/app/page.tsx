import ProductCard from "@/components/productcard/ProductCard";
import Link from "next/link";

export default function HomePage() {
  // Example featured products (replace with fetch from backend later)
  const featuredProducts = [
    { id: "1", name: "Product 1", price: 49.99, image: "/images/products/product1.jpg" },
    { id: "2", name: "Product 2", price: 29.99, image: "/images/products/product2.jpg" },
    { id: "3", name: "Product 3", price: 19.99, image: "/images/products/product3.jpg" },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to E-Commerce Store</h1>
        <p className="text-gray-600 mb-6">
          Shop the best products at the best prices.
        </p>
        <Link
          href="/shop"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition-colors"
        >
          Start Shopping
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}