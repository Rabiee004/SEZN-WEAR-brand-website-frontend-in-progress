import { useState } from "react";
import ProductCard from "../component/ProductCard";

function Products() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const products = [
    {
      id: "turath-1",
      name: "Turath — 01",
      price: 40,
      images: ["/Images/Turath1_1.jpg",
        "/Images/Turath1_2.jpg",
        "/Images/Turath1_3.jpg",
      ],
    },
    {
      id: "turath-2",
      name: "Turath — 02",
      price: 40,
      images: ["/Images/Turath2_1.jpg"],
    },
    {
      id: "turath-3",
      name: "Turath — 03",
      price: 40,
      images: ["/Images/Turath3_1.jpg"],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      {/* Header */}
      <div className="mb-20">
        <h1 className="text-4xl md:text-5xl font-playfair">
          Collection
        </h1>
        <p className="text-sm text-white/60 mt-2">
          Refined silhouettes. Timeless construction.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;
