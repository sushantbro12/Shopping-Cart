import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const newCartItems = [...prevItems, { ...product, quantity: 1 }];
      return newCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newCartItems = prevItems.filter((item) => item.id !== productId);
      return newCartItems;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      );
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
