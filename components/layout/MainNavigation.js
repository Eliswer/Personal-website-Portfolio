import { useState } from "react";
import classes from "./mainNavigation.module.css";

import Image from "next/image";
import codeIcon from "../../public/icons/codeIcon.svg";

import ScrollTo from "react-scroll-into-view";

function mainNavigation() {
  const [visiting, setVisited] = useState({
    aboutMe: true,
    skills: false,
    projects: false,
    contactMe: false,
  });

  const setAboutMeToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: true,
      skills: false,
      projects: false,
      contactMe: false,
    });
  };

  const setSkillsToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: false,
      skills: true,
      projects: false,
      contactMe: false,
    });
  };

  const setProjectsToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: false,
      skills: false,
      projects: true,
      contactMe: false,
    });
  };

  const setContactMeToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: false,
      skills: false,
      projects: false,
      contactMe: true,
    });
  };

  return (
    <>
      <div className={classes["nav-top"]}>
        <div className={classes.codeIcon}>
          <Image src={codeIcon} alt="htmlTagIcon" />
        </div>
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
          <li>
            <ScrollTo selector={".projects"}>
              <a onClick={setProjectsToVisited}>03 Projects</a>
            </ScrollTo>
          </li>
          <li>
            <ScrollTo selector={".contactMe"}>
              <a onClick={setContactMeToVisited}>04 Contact me</a>
            </ScrollTo>
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
