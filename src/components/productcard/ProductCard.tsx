interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: {product:Product} ) {
  return (
    <div className="border border-gray-200 rounded p-4 hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-700 font-medium mb-4">${product.price.toFixed(2)}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}