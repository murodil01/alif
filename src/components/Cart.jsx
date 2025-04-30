import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div className="text-center py-10 text-gray-500">Savatcha bo‘sh</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">🛒 Savatchangiz</h2>

      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
            <div>
              <h3 className="font-semibold line-clamp-1 max-w-[200px]">{item.title}</h3>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >-</button>
            <span>{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >+</button>
          </div>
          <div className="text-right font-bold">${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      ))}

      <div className="text-right mt-6">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Savatchani tozalash
        </button>
      </div>

      <div className="text-right font-bold text-xl mt-4">
        Umumiy narx: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;