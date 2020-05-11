import React from "react";
import Card from "../../../components/Card/Card";

import styles from "./Shopnow.module.scss";

const Shopnow = () => {
  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <Card
          image={"https://source.unsplash.com/user/erondu/600x400"}
          title={"What happened in Thialand?"}
          text={
            "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
          }
        />
        <Card
          image={"https://source.unsplash.com/user/erondu/600x400"}
          title={"What happened in Thialand?"}
          text={
            "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
          }
        />
        <Card
          image={"https://source.unsplash.com/user/erondu/600x400"}
          title={"What happened in Thialand?"}
          text={
            "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
          }
        />
      </div>
      <button className={styles.shop_button} type="button">Shop now</button>
    </section>
  );
};
export default Shopnow;
