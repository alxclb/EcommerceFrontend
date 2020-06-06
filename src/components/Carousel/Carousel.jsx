import React, { useState, useEffect } from "react";

import styles from "./Carousel.module.scss";
import Card from "../Card/Card";
import classNames from "classnames";
import { getAllProducts } from "../../service/product";

const Carousel = (props) => {
  const [opacityValue, setOpacityValue] = useState(1);
  const [selectedDot, setSelectedDot] = useState(0);
  const [slideOrder, setSlideOrder] = useState([4, 5, 1, 2, 3]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      setItems(data.data.slice(0, 5));
    });
  }, []);

  // n spaces right
  const moveRight = (spaces = 1) => {
    const s = slideOrder.map(
      (_, i) => slideOrder[(i + spaces) % slideOrder.length]
    );
    setSelectedDot((selectedDot + spaces) % 5);
    setOpacityValue(0);
    setTimeout(() => {
      setSlideOrder(s);
    }, 400);
    setTimeout(() => {
      setOpacityValue(1);
    }, 700);
  };

  //n spaces left
  const moveLeft = (spaces = 1) => {
    const s = slideOrder.reduce((result, slide, i) => {
      result[(i + spaces) % slideOrder.length] = slide;
      return result;
    }, []);
    setSelectedDot(4 - ((4 - selectedDot + spaces) % 5));
    setOpacityValue(0);
    setTimeout(() => {
      setSlideOrder(s);
    }, 400);
    setTimeout(() => {
      setOpacityValue(1);
    }, 700);
  };

  const handleDotClick = (dot) => {
    if (dot > selectedDot) {
      moveRight(dot - selectedDot);
    } else if (dot < selectedDot) {
      moveLeft(selectedDot - dot);
    }
  };

  return (
    <div className={styles.carousel_wrap}>
      <div className={styles.carousel_container}>
        <button
          className={classNames(styles.carousel_btn, styles.prev_btn)}
          onClick={() => moveLeft()}
        >
          <i className={classNames(styles.carousel_btn__arrow, styles.left)} />
        </button>
        <ul className={classNames(styles.carousel_slide_list)}>
          {items.map((item, index) => {
            return (
              <li
                style={{ order: slideOrder[index], opacity: opacityValue }}
                key={index}
                className={styles.carousel_slide_item}
              >
                <div key={index} className={styles.card_wrapper}>
                  <Card item={item} />
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className={classNames(styles.carousel_btn, styles.next_btn)}
          onClick={() => moveRight()}
        >
          <i className={classNames(styles.carousel_btn__arrow, styles.right)} />
        </button>
      </div>
      <div className={styles.carousel_dots}>
        {slideOrder.map((_, i) => {
          const className =
            selectedDot === i
              ? classNames(styles.dot, styles.active)
              : styles.dot;
          return (
            <button
              key={i}
              className={className}
              onClick={() => handleDotClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;
