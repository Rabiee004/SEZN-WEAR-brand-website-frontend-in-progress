import { useState } from "react";

function ProductCard({ id, name, price, images, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["S", "M", "L"];

  const handleAdd = () => {
    if (!selectedSize) return;

    onAddToCart({
      id,
      name,
      price,
      size: selectedSize,
      image: images[0],
    });

    setSelectedSize(null);
  };

  return (
    <div className="flex flex-col space-y-4">

      {/* Image */}
      <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-playfair">{name}</h3>
        <p className="text-sm">${price}</p>
      </div>

      {/* Size Selector */}
      <div className="flex space-x-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-9 h-9 border text-sm transition 
              ${selectedSize === size
                ? "bg-white text-black"
                : "border-white hover:bg-white hover:text-black"
              }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        disabled={!selectedSize}
        className={`mt-2 py-3 text-sm tracking-wide transition
          ${selectedSize
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-white/20 text-white/40 cursor-not-allowed"
          }`}
      >
        Add to Cart +
      </button>
    </div>
  );
}

export default ProductCard;
