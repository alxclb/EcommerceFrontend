import React from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { image } = props;
  const { active } = props;
  const { index } = props;
  const style = {
    backgroundImage: "url(" + image + ")",
  };

 

  return (
    <article className={styles.container}>
      <header style={style} id={image} className={styles.card_header}>
        <h4 className={styles.card_header__title}>News</h4>
      </header>
      <div className={styles.card_body}>
        <p className="date">March 20 2015</p>

        <h2>{props.title}</h2>
        <h2>{index}</h2>

        <p className={styles.body_content}>{props.text}</p>
        <Link to="/product">
          <button className={classNames(styles.button, styles.button_primary)}>
            Buy
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Card;
