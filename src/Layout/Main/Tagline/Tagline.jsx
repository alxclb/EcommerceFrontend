import React from "react";

import styles from "./Tagline.module.scss";
import aboutStyles from "./TaglineAbout.module.scss";

const Tagline = (props) => {
  const { tag } = props;

  let style;
  let data;

  if (tag === "Header") {
    style = styles;
    data = desc[0];
  } else {
    style = aboutStyles;
    data = desc[1];
  }

  return (
    <div className={style.container}>
      <h1 className={style.tag}>{data.tagline}</h1>
      <p className={style.text}>{data.text}</p>
      <hr />
    </div>
  );
};
export default Tagline;

const desc = [
  {
    describe: "Header",
    tagline: "Tagline describing your e-shop",
    className: `${styles.tag}`,
  },
  {
    describe: "About",
    tagline: "About Your Shop",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ",
    className: `${styles.tag}`,
  },
];
