import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

const Card = (props) => {
  const { item } = props;

  let category = item.category;
  let brand = item.brand;
  let image = item.image.img;
  let name = item.name;
  let price = item.price + "$";
  let description = item.description;

  const style = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <article className={styles.container}>
      <header style={style} className={styles.card_header}>
        <h4 className={styles.card_header__title}>{category}</h4>
      </header>
      <div className={styles.card_body}>
        <p className={styles.body_content}>
          {brand + " " + name + " " + description}
        </p>
        <h4 className={styles.price}>{price}</h4>
        <div className={styles.btn_wrapper}>
          <Link to={`/product/${item._id}`}>
            <button
              className={classNames(styles.button, styles.button_primary)}
            >
              Buy
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
