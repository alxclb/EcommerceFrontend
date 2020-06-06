import React, { useContext } from "react";
import { Link } from "react-router-dom";

import cart from "../../images/cart.svg";
import styles from "./Navbar.module.scss";
import { LoginContext } from "../../context/loginContext";
import { useState } from "react";
import Cart from "./../Cart/Cart";

const Navbar = () => {
  const { dispatch } = useContext(LoginContext);

  const logout = () => {
    localStorage.setItem(
      "login",
      JSON.stringify({
        login: false,
        token: "",
      })
    );
    let data = {
      login: false,
      token: "",
    };
    dispatch({ type: "LOGOUT", data });
  };

  const [modal, setModal] = useState({ show: false });

  const showModal = (e) => {
    setModal({
      show: !modal.show,
    });
  };

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
        <li className={styles.title}>
          <Link to="/Admin">Admin</Link>{" "}
        </li>
        <li className={styles.title_cart}>
          <div
            className={styles.cart_wrapper}
            onClick={(e) => {
              showModal();
            }}
          >
            <img alt="cart" src={cart} className={styles.cart} />
            <span>Your cart</span> 
            <span></span> 
          </div>
        </li>
        {!JSON.parse(window.localStorage.getItem("login")).login ? (
          <>
            {" "}
            <li className={styles.title_cart}>
              <div className={styles.reg_wrapper}>
                <Link to="/register">Join</Link>
              </div>
            </li>
            <li className={styles.title_cart}>
              <div className={styles.reg_wrapper}>
                <Link to="/login">Sign in</Link>
              </div>
            </li>
          </>
        ) : (
          <li className={styles.title_cart}>
            <div className={styles.reg_wrapper}>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </div>
          </li>
        )}
      </ul>
      <div>
        <Cart show={modal.show} onClose={showModal}  />
      </div>
    </div>
  );
};
export default Navbar;
