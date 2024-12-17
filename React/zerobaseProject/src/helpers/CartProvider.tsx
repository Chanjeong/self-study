import React, { useState, useContext, createContext, ReactNode } from "react";
import { Product } from "../components/common/ItemList";

interface CartProduct extends Product {
  quantity: number;
}

interface cartContextType {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<cartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity + quantity } : item))
        .filter((item) => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return <CartContext.Provider value={{ cart, addToCart, updateQuantity, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};