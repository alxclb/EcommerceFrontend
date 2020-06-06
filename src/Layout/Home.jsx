import React from "react";

import styles from "./Home.module.scss";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { isLogged } from "../service/api";
import { Redirect } from "react-router-dom";

const Home = () => {
  return (
    <>
      {isLogged() ? (
        <div className={styles.container}>
          <Main />
          <Footer />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Home;
