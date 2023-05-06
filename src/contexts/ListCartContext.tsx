import React, { ReactNode, createContext, useContext, useState } from 'react';
import { itemForCartDate } from '../pages/Home';

interface CartContextData {
  itemsForCart: itemForCartDate[];
  setItemsForCart: React.Dispatch<React.SetStateAction<itemForCartDate[]>>;
  deleteItem: (itemDelete: string) => void;
  addAmountItemCart: (itemId: string) => void;
  removeAmountItemCart: (itemId: string) => void;
  formattedTotalPrice: string;
  formattedTotalPriceFrete: string;
  activeSidebar: boolean;
  setActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData);


export function CartProvider({ children }: CartProviderProps) {
  const [itemsForCart, setItemsForCart] = useState<itemForCartDate[]>([]);
  const [activeSidebar, setActiveSidebar] = useState(false);


  const totalPrice = itemsForCart.reduce((acc, item) => {
    
    const AmountItem = item.amount * parseFloat(item.price.replace(",", "."));

    return acc + AmountItem;
  }, 0);

  const totalPriceFrete = totalPrice > 0 ? totalPrice + 5.00 : 0;

  const formattedTotalPrice = totalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formattedTotalPriceFrete = totalPriceFrete.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function deleteItem(itemDelete: string) {
    const itemToDelete = itemsForCart.filter(item => {
      return item.id !== itemDelete
    })

    setItemsForCart(itemToDelete);
  }

  function addAmountItemCart(itemId: string) {
    const updatedItems = itemsForCart.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          amount: item.amount + 1
        };
      }
      return item;
    });
  
    setItemsForCart(updatedItems);
  }

  function removeAmountItemCart(itemId: string) {
    const AmountLess = itemsForCart.map(item => {
      if(item.id === itemId) {
        if(item.amount > 0) {
          return {
            ...item,
            amount: item.amount - 1
          }
        }else {
          return {
            ...item,
            amount: item.amount = 0
          }
        }
      }
      return item;
    }
  ) 
  setItemsForCart(AmountLess);
  }

  return (
    <CartContext.Provider value={{ itemsForCart, setItemsForCart, formattedTotalPrice, formattedTotalPriceFrete, deleteItem, addAmountItemCart, removeAmountItemCart, activeSidebar, setActiveSidebar  }}>
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
