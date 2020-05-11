import React from "react";
import { Link } from "react-router-dom";

import cart from "../../images/cart.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.title_list}>
        <li className={styles.title}>
          <Link to="/">Home</Link>{" "}
        </li>
        <li className={styles.title}>
          <Link to="/about">About</Link>{" "}
        </li>
        <li className={styles.title}>
          <Link to="/shop">Shop</Link>{" "}
        </li>
        <li className={styles.title}>
          <Link to="/help">Help</Link>{" "}
        </li>
        <li className={styles.title_cart}>
          <div className={styles.cart_wrapper}>
            <img alt="cart" src={cart} className={styles.cart} />
            <span>Your cart</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
