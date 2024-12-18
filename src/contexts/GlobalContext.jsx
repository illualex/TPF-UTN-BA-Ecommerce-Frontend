import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : []; // Cargar usuarios del localStorage si existen
  });

  // Recuperar el username de sessionStorage al cargar la página
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Establecer el nombre completo del usuario
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users)); // Guardar usuarios registrados en localStorage
    }
  }, [users]);

  const login = (user) => {
    const fullName = `${user.name} ${user.lastName}`; // Combinar nombre y apellido
    sessionStorage.setItem("username", fullName); // Guardar nombre completo en sessionStorage
    setUsername(fullName); // Actualizar el estado con el nombre completo
  };

  const logout = (navigate) => {
    sessionStorage.removeItem("username"); // Eliminar nombre de usuario de sessionStorage
    setUsername(""); // Limpiar el estado de username
    if (navigate) navigate("/home"); // Redirige al home después del logout
  };

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

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Función de registro de usuario
  const register = (username, password) => {
    const newUser = { username, password };
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      return updatedUsers;
    });
    login({ name: username, lastName: "" }); // Al registrarse, el usuario se loguea automáticamente (sin apellido por defecto)
  };

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        username,
        users,
        login,
        logout,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartItemCount,
        register, // Proveer la función de registro
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
