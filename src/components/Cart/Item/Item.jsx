import React from "react";

import styles from "./Item.module.scss";

const Item = (props) => {
  const { item } = props;
  const { index } = props;
  const { handleDelete } = props;


  const deleteItem = () =>{
    handleDelete(index)
  }

  let total = item.qty * item.price;
  let No = index + 1 + ".";

  return (
    <div className={styles.container}>
      <div>{No}</div>
      <div>{item.name}</div>
      <div>{item.qty}</div>
      <div>{item.price}</div>
      <div>{total}</div>
      <button type="button" onClick={deleteItem}>X</button>
    </div>
  );
};
export default Item;
