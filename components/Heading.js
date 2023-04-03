import classes from "./heading.module.css";
import Image from "next/image";

import Triangle from "../public/imgs/PurpleTriangleHeading.png";

function Heading({ number, title }) {
  return (
    <div style={{ position: "relative" }}>
      <div className={classes.triangleWrapper}>
        <Image src={Triangle} width={750} />
      </div>
      <h2 className={`${classes.title} gradient-text`}>
        <span className={classes["title-number"]}>{number}</span>
        <span className={classes["title-text"]}>{title}</span>
      </h2>
    </div>
  );
}

export default Heading;
