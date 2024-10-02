import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Initialize cartItems from local storage
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const newCartItems = [...prevItems, product];
      return newCartItems; // Return new cart items
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newCartItems = prevItems.filter((item) => item.id !== productId);
      return newCartItems; // Return new cart items
    });
  };

  // Sync cartItems with local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
