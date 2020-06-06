import React from "react";
import icon from "../../images/icon_T-shirt.png";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.container}>
      <h1>
        e-shop
          <img alt="icon" src={icon} className={styles.icon} />
      </h1>
    </div>
  );
};
export default Logo;
