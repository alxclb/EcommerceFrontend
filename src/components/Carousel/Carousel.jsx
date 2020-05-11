import React, { useState } from "react";

import styles from "./Carousel.module.scss";
import Card from "../Card/Card";
import classNames from "classnames";

const Carousel = (props) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [slideOrder, setSlideOrder] = useState(["s4", "s5", "s1", "s2", "s3"]);
  const [slideStyles, setSlideStyles] = useState({});

  const rotate = (slides) => {
    const [s1, s2, s3, s4, s5] = slides;
    setSlideStyles({
      [s1]: { transform: "translateX(-60rem)", opacity: 0 },
      [s2]: { transform: "translateX(-30rem)", opacity: 1 },
      [s3]: { transform: "translateX(0)", opacity: 1 },
      [s4]: { transform: "translateX(30rem)", opacity: 1 },
      [s5]: { transform: "translateX(60rem)", opacity: 0 },
    });
    setSlideOrder(slides);
  };

  // rotate slides left by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [3, 4, 5, 1, 2]
  const rotateLeft = (spaces = 1) => {
    const s = slideOrder.map(
      (_, i) => slideOrder[(i + spaces) % slideOrder.length]
    );

    setSelectedIdx((selectedIdx + spaces) % 5);
    rotate(s);
  };

  // rotate slides right by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3]
  const rotateRight = (spaces = 1) => {
    const s = slideOrder.reduce((result, slide, i) => {
      result[(i + spaces) % slideOrder.length] = slide;
      return result;
    }, []);
    setSelectedIdx(4 - ((4 - selectedIdx + spaces) % 5));
    rotate(s);
  };

  const handleDotClick = (idx) => {
    if (idx > selectedIdx) {
      rotateLeft(idx - selectedIdx);
    } else if (idx < selectedIdx) {
      rotateRight(selectedIdx - idx);
    }
  };

  // const {list} = props
  return (
    <div className={styles.carousel_wrap}>
      <div className={styles.carousel_container}>
        <button
          className={classNames(styles.carousel_btn, styles.prev_btn)}
          onClick={() => rotateLeft()}
        >
          <i className={classNames(styles.carousel_btn__arrow, styles.left)} />
        </button>
        <ul className={styles.carousel_slide_list}>
          {slides.map((slide, index) => {
            let itemClass = `styles.s${slide.id}`;
            return (
              <li
                key={index}
                className={classNames(styles.carousel_slide_item, itemClass)}
                style={slideStyles[`s${slide.id}`]}
              >
                <div key={index} className={styles.card_wrapper}>
                  <Card
                    index={index}
                    image={slide.image}
                    title={slide.title}
                    text={slide.desc}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className={classNames(styles.carousel_btn, styles.next_btn)}
          onClick={() => rotateRight()}
        >
          <i className={classNames(styles.carousel_btn__arrow, styles.right)} />
        </button>
      </div>
      <div className={styles.carousel_dots}>
        {slides.map((_, i) => {
          const className =
            selectedIdx === i
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

const slides = [
  {
    id: 1,
    title: "Efren Reyes",
    desc:
      'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
  },
  {
    id: 2,
    title: `Ronnie O'Sullivan`,
    desc: `Ronnie O'Sullivan professional snooker player who is widely regarded as one of the greatest players in the history of the discipline.`,
    image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
  },
  {
    id: 3,
    title: "Shane Van Boening",
    desc:
      'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',

    image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg",
  },
  {
    id: 4,
    title: "Mike Sigel",
    desc: `Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.`,

    image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
  },
  {
    id: 5,
    title: "Willie Mosconi",
    desc:
      'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',

    image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg",
  },
];
