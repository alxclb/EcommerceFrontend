import React from "react";
import background1 from "../../../images/city.jpg";
import background2 from "../../../images/store.jpg";
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

  let background = {
    backgroundImage: `url(${data.background})`,
    backgroundPosition: 'center center'
  };

  return (
    <div style={background}>
      <div className={style.container}>
        <h1>{data.tagline}</h1>
        <p className={style.text}>{data.text}</p>
        <hr />
      </div>
    </div>
  );
};
export default Tagline;

const desc = [
  {
    describe: "Header",
    tagline: "Tagline describing your e-shop",
    background: `${background1}`,
    className: `${styles.tag}`,
  },
  {
    describe: "About",
    tagline: "About",
    background: `${background2}`,
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ",
    className: `${styles.tag}`,
  },
];
