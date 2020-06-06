import React, { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

export const ProductContext = createContext();


export const ProductProvider = (props) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};
