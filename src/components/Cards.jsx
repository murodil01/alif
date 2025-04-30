import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-10">Yuklanmoqda...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-10">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md p-4 relative group"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2">
            {item.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold text-lg">
              ${item.price}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ${(item.price * 1.2).toFixed(2)}
            </span>
          </div>

          <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3 transition">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              ❤️
            </button>
            <button
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              onClick={() => addToCart(item)}
            >
              🛒
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
