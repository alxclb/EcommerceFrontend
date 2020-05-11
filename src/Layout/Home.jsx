import React from "react";

import styles from "./Home.module.scss";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
