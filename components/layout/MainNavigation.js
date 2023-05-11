import { useEffect, useState } from "react";
import classes from "./mainNavigation.module.css";

import Image from "next/image";
import codeIcon from "../../public/icons/codeIcon.svg";

import ScrollTo from "react-scroll-into-view";
import useReadingProgress from "../hooks/useReadingProgress";
import useMediaQuery from "../hooks/useMediaquery";
import useCalcDate from "../hooks/useCalcDate";

function MainNavigation({
  setAboutMeToVisited,
  setContactMeToVisited,
  setProjectsToVisited,
  setSkillsToVisited,
  visiting,
}) {
  const getTodaysDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    return (today = mm + "-" + dd + "-" + yyyy);
  };

  const developerFor = useCalcDate("07-01-2022", getTodaysDate());

  const completion = useReadingProgress();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const breakPoint = useMediaQuery();

  useEffect(() => {
    setHamburgerMenu(breakPoint ? true : false);
  }, [breakPoint]);

  const handleShowMenuClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <>
      <>
        {hamburgerMenu ? (
          <div className={classes["nav-top-fixed"]}>
            <>
              <div className={classes.hamburger} onClick={handleShowMenuClick}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
              </div>
            </>
          </div>
        ) : (
          ""
        )}
      </>
      <div
        className={classes["nav-top"]}
        style={{ visibility: showMenu ? "hidden" : "visible" }}
      >
        {hamburgerMenu ? (
          ""
        ) : (
          <div className={classes.codeIcon}>
            <Image src={codeIcon} alt="htmlTagIcon" />
          </div>
        )}

        <ul className={classes.links}>
          <li className={visiting.aboutMe ? `${classes.visiting}` : ""}>
            <ScrollTo selector={".aboutMe"} alignToTop={true}>
              <a onClick={setAboutMeToVisited}>01 About me</a>
            </ScrollTo>
          </li>
          <li className={visiting.skills ? `${classes.visiting}` : ""}>
            <ScrollTo selector={".skills"}>
              <a onClick={setSkillsToVisited}>02 Skills</a>
            </ScrollTo>
          </li>
          <li className={visiting.projects ? `${classes.visiting}` : ""}>
            <ScrollTo selector={".projects"}>
              <a onClick={setProjectsToVisited}>03 Projects</a>
            </ScrollTo>
          </li>
          <li className={visiting.contactMe ? `${classes.visiting}` : ""}>
            <ScrollTo selector={".contactMe"}>
              <a onClick={setContactMeToVisited}>04 Contact me</a>
            </ScrollTo>
          </li>
          <button className={classes["resume-button"]}>Resume</button>
        </ul>
      </div>

      <div className={classes["nav-bottom"]}>
        <div
          className={classes["scroll-bar-fixed"]}
          style={{ visibility: showMenu ? "hidden" : "visible" }}
        ></div>
        <h1
          className="gradient-text"
          style={{ visibility: showMenu ? "hidden" : "visible" }}
        >
          Developer for: {developerFor.result}
        </h1>

        {hamburgerMenu ? (
          ""
        ) : (
          <div
            className={classes["scroll-bar"]}
            style={{ width: completion - 15 + "%" }}
          ></div>
        )}
      </div>
    </>
  );
}

export default MainNavigation;
