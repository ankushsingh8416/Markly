import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct, cart, addToCart,removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};
