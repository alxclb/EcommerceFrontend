import React from "react";

import styles from "./Header.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
