import React from "react";
import icon from "../../images/search.png";

import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.search__bar}>
      <span className={styles.icon__wraper}>
        <img alt="icon" src={icon} className={styles.icon}/>
      </span>
      <input className={styles.input__text} type="text" placeholder="Search..." />
    </div>
  );
};
export default Search;
