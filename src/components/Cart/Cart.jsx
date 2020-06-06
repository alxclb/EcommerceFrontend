import React, { useContext } from "react";

import styles from "./Cart.module.scss";
import { CartContext } from "../../context/cartContext";
import Item from "./Item/Item";

const Cart = (props) => {
  const { cart, dispatch } = useContext(CartContext);
  //console.log(cart);

  const handleDelete = (index) => {
    dispatch({ type: "REMOVE_PRODUCT", index });
  };

  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.title_container}>
            <span>No</span>
            <span>Name</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          {cart.map((item, index) => {
            return (
              <div className={styles.item_container} key={item.id}>
                {/* <h3>{index}</h3> */}
                <Item item={item} index={index} handleDelete={handleDelete} />
              </div>
            );
          })}
        </div>
        {/* <div>
          <button
            onClose={(e) => {
              onClose(e) && props.onClose(e);
            }}
          >
            Close
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Cart;
