import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Components/CardContext";
import Header from "../Components/header";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <Header />
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="bg-amber-100 p-5">No data yet.</p>
        ) : (
          <div className="space-y-4 ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between p-4 border-2 border-slate-300 rounded shadow-md">
                <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-36 h-36 sm:w-36 sm:h-36 object-contain"
                  />
                </div>

                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-bold text-lg text-blue-600 hover:underline   ">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex flex-row items-center justify-center sm:justify-start gap-4">
                    <label className="flex items-center">
                      <span className="mr-2">Qty:</span>
                      <input
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="border-2 w-16 text-center"
                        type="number"
                        min="1"
                        Value={item.quantity}
                      />
                    </label>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-blue-500 hover:underline ">
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 text-right">
                  <span className="font-semibold text-lg">${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 text-right mr-2">
          <h1 className="font-semibold text-xl">
            Total Price: ${calculateTotal()}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
