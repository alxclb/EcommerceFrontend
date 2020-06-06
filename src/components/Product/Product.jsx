import React, { useState, useContext } from "react";

import styles from "./Product.module.scss";
import { useEffect } from "react";
import { getProduct } from "../../service/product";
import { CartContext } from "../../context/cartContext";

const Product = (props) => {
  const { cart, dispatch } = useContext(CartContext);
  const {
    match: { params },
  } = props;
  const [productID] = useState(params);
  const [product, setProduct] = useState(params);
  const [image, setImage] = useState('Loading...')
  // const [countInStock, setCountInStock] = useState();
  // const [stock, setStock] = useState("");

  useEffect(() => {
    getProduct(productID.id).then((data) => {
      setProduct(data.data);
      setImage(data.data.image.img)
    });
  }, [productID.id]);

  const [selectedOption, setSelectedOption] = useState("");

  let title = product.category + " " + product.brand + " " + product.name;
  let description = product.description;
  let price = product.price + "$";
  
  const handleSortPrice = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBuyBtn = () => {
    let data = {
      id: productID.id,
      name: title,
      qty: selectedOption,
      price: product.price,
    };

    if (cart.find((item) => item.id === data.id)) {
      let found = (item) => item.id === data.id;
      let index = cart.findIndex(found);
      let quantity = +cart[index].qty + +data.qty + "";
      dispatch({ type: "UPDATE_CART", index, quantity });
    } else {
      console.log(false);
      dispatch({ type: "ADD_CART", data });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.card}>
          {image === "Loading..." ? (
            <h1>Loading...</h1>
          ) : (
            <img alt="img" src={image} />
          )}
        </div>
        <div className={styles.info}>
          <div>
            <h1>{title}</h1>
            <div className={styles.buy_container}>
              <div className={styles.price}>
                <label>Price</label>
                <div className={styles.show_price}>{price}</div>

                {/* <label>{stock}</label> */}
                <div>
                  <select value={selectedOption} onChange={handleSortPrice}>
                    <option value="">Qty</option>
                    <option value="1">{"1"}</option>
                    <option value="2">{"2"}</option>
                    <option value="3">{"3"}</option>
                    <option value="4">{"4"}</option>
                    <option value="5">{"5"}</option>
                    <option value="6">{"6"}</option>
                    <option value="7">{"7"}</option>
                    <option value="8">{"8"}</option>
                    <option value="9">{"9"}</option>
                    <option value="10">{"10"}</option>
                  </select>
                </div>
                <div>
                  <button type="button" onClick={handleBuyBtn}>
                    Buy
                  </button>
                </div>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.similar}></div>
      <div className={styles.reviews}></div>
    </div>
  );
};
export default Product;
