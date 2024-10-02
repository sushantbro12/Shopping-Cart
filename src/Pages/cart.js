// src/Pages/Cart.js

import React, { useContext } from "react";
import { CartContext } from "../Components/CardContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between mb-4 border p-2">
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
            </div>
          ))}
          <p>Total Items: {cartItems.length}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
