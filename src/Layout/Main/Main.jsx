import React from "react";
import Tagline from "./Tagline/Tagline";

import styles from "./Main.module.scss";
import Shopnow from "./ShopNow/Shopnow";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

const Main = () => {
 
  return (
    <div className={styles.container}>
      <Tagline tag="Header" />
      <Shopnow  />
      <FeaturedProducts />
      <Tagline tag="About" />
    </div>
  );
};
export default Main;
