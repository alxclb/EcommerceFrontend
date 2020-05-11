import React from "react";
import Search from "../../components/Searchbar/Search";

import styles from "./Header.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
