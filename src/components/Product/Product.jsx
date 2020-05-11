import React from "react";

import styles from "./Product.module.scss";
import Card from "../Card/Card";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.card}>
          <Card />
        </div>
        <div className={styles.info}>
          <div>
            <h3>Product title</h3>
            <div className={styles.price}>
              <label>Price</label>
              <div>100 $</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.similar}></div>
      <div className={styles.reviews}></div>
    </div>
  );
};
export default Product;
