import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LoginProvider } from "./context/loginContext";
import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
