import { useInView } from "react-intersection-observer";
import classes from "./heading.module.css";
import Image from "next/image";

import Triangle from "../../public/imgs/PurpleTriangleHeading.png";
import { useEffect } from "react";

function Heading({ number, title }) {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  let newStyles = {
    color: "black",
    fontFamily: "monospace",
    overflow: "hidden",
    borderRight: ".15em solid orange",
    whiteSpace: "nowrap",
    margin: "0 auto",
  };
  let newStyling;

  useEffect(() => {
    if (myElementIsVisible) {
      newStyling = newStyles;
    } else {
      newStyling = { visibility: "visibile" };
    }
  }, [myElementIsVisible]);

  console.log(myElementIsVisible);

  return (
    <div className={classes.wrapper} style={{ position: "relative" }}>
      <div className={classes.triangleWrapper}>
        <Image src={Triangle} alt="purple triangle" fill />
      </div>
      <h2 className={`${classes.title} gradient-text`}>
        <span className={classes["title-number"]}>{number}</span>
        <span ref={myRef} className={classes["title-text"]} style={newStyling}>
          {title}
        </span>
      </h2>
    </div>
  );
}

export default Heading;
