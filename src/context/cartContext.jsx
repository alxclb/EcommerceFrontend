import React, { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();
const localState = JSON.parse(localStorage.getItem("cart"));
const initialState = [];

export const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
