import React, { useEffect } from "react";
import Card from "../../../components/Card/Card";

import styles from "./Shopnow.module.scss";
import { useState } from "react";
import { getAllProducts } from "../../../service/product";
import { Link } from "react-router-dom";
import { isLogged } from "../../../service/api";

const Shopnow = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (isLogged) {
      getAllProducts().then((data) => {
        setItems(data.data);
      });
    }
  }, []);

  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        {items.slice(0, 4).map((item, index) => (
          <div key={index}>
            <Card item={item} />
          </div>
        ))}
      </div>
      <Link to="/shop">
        <button className={styles.shop_button} type="button">
          Shop now
        </button>
      </Link>
    </section>
  );
};
export default Shopnow;
