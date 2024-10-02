import React, { useContext } from "react";
import { CartContext } from "../Components/CardContext";
import Header from "../Components/header";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-4 border p-2">
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline">
                  Remove
                </button>
              </div>
            ))}
            <p>Total Items: {cartItems.length}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
