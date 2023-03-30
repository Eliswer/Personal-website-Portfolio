import classes from "./heading.module.css";
import Image from "next/image";

import Triangle from "../public/imgs/PurpleTriangleHeading.png";

function Heading({ number, title }) {
  return (
    <div>
      <div className={classes.triangleWrapper}>
        <Image src={Triangle} width={750} />
      </div>
      <h2 className={`${classes.title} gradient-text`}>
        {number} {title}
      </h2>
    </div>
  );
}

export default Heading;
