import { useState, useEffect } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      if (updatedItems.length > 0) {
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      } else {
        localStorage.removeItem("cartItems");
      }
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]); // Limpia el estado del carrito
    localStorage.removeItem("cartItems"); // Limpia localStorage
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return { cartItems, addToCart, removeFromCart, clearCart, getCartItemCount };
};