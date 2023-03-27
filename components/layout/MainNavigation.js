import classes from "./mainNavigation.module.css";

import Image from "next/image";
import codeIcon from "../../public/icons/codeIcon.svg";

function mainNavigation() {
  return (
    <>
      <div className={classes["nav-top"]}>
        <div className={classes.codeIcon}>
          <Image src={codeIcon} alt="htmlTagIcon" />
        </div>
        <ul className={classes.links}>
          <li className={classes["visiting"]}>
            <a>01 About me</a>
          </li>
          <li>
            <a href="/">02 Skills</a>
          </li>
          <li>
            <a>03 Projects</a>
          </li>
          <li>
            <a>04 Contact me</a>
          </li>
          <button className={classes["resume-button"]}>Resume</button>
        </ul>
      </div>
      <div className={classes["nav-bottom"]}>
        <div className={classes["scroll-bar-fixed"]}></div>
        <h1 className="gradient-text">Developer for: 8m 10d</h1>
        <div className={classes["scroll-bar"]}></div>
      </div>
    </>
  );
}

export default mainNavigation;
