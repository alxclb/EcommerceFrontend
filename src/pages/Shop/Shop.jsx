import React, { useEffect } from "react";

import styles from "./Shop.module.scss";
import Card from "./../../components/Card/Card";
import { useState } from "react";
import { getAllProducts } from "../../service/product";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      setItems(data.data);
    });
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const handleSortPrice = (event) => {
    let sortedArray;
    event.target.value === "high"
      ? (sortedArray = items.sort(compareHigh))
      : (sortedArray = items.sort(compareLow));
    //console.log(sortedArray)
    setSelectedOption(event.target.value);
    setItems(sortedArray);
  };

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <p>
        T-SHIRTS No wardrobe would be complete without a staple T-shirt.
        Featuring a variety of styles available in multiple hues, our selection
        houses cropped t-shirts, ruched mesh tops, boxy t-shirts and many more
        to choose from. Whether you're after simple tees to pair with jeans or a
        colourful design that makes a statement, we've got all you need to nail
        the basics and beyond. Boasting long and short sleeve styles, our
        exhaustive collection has something for every woman to amp up her
        off-duty wardrobe edit. Find your perfect piece from our latest
        collection of t-shirts for women at Topshop to anchor your wardrobe with
        comfort and style.
      </p>
      <div className={styles.price_wrapper}>
        <select
          className={styles.price}
          value={selectedOption}
          onChange={handleSortPrice}
        >
          <option value="">Price</option>
          <option value="low">Price - Low To High</option>
          <option value="high">Price - High To Low</option>
        </select>
      </div>
      <div className={styles.list_container}>
        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

function compareHigh(a, b) {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
}
function compareLow(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}
