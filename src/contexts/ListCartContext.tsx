import React, { ReactNode, createContext, useContext, useState } from 'react';
import { itemForCartDate } from '../pages/Home';

interface CartContextData {
  itemsForCart: itemForCartDate[];
  setItemsForCart: React.Dispatch<React.SetStateAction<itemForCartDate[]>>;
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [itemsForCart, setItemsForCart] = useState<itemForCartDate[]>([]);

  return (
    <CartContext.Provider value={{ itemsForCart, setItemsForCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
