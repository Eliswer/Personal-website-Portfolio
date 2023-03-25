import classes from "./mainNavigation.module.css";

import Image from "next/image";
import codeIcon from "../../public/icons/codeIcon.png";

function mainNavigation() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.codeIcon}>
        <Image src={codeIcon} alt="htmlTagIcon" />
      </div>
      <ul className={classes.links}>
        <li>01 About me</li>
        <li>02 Skills</li>
        <li>03 Projects</li>
        <li>04 Contact me</li>
        <button>Resume</button>
      </ul>
    </div>
  );
}

export default mainNavigation;
