import React, { Fragment } from "react";
import Carousel from "../../../components/Carousel/Carousel";

import styles from "./FeaturedProducts.module.scss";

const FeaturedProducts = () => {
  return (
    <Fragment>
      <hr className={styles.line} />
      <h1 className={styles.title}>Featured products</h1>
      <Carousel />
    </Fragment>
  );
};
export default FeaturedProducts;
