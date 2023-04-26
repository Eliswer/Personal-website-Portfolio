import { useEffect, useState } from "react";
import classes from "./mainNavigation.module.css";

import Image from "next/image";
import codeIcon from "../../public/icons/codeIcon.svg";

import ScrollTo from "react-scroll-into-view";
import useReadingProgress from "../hooks/useReadingProgress";

function mainNavigation() {
  const completion = useReadingProgress();

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

  function calcDate(date1, date2) {
    /*
     * calcDate() : Calculates the difference between two dates
     * @date1 : "First Date in the format MM-DD-YYYY"
     * @date2 : "Second Date in the format MM-DD-YYYY"
     * return : Array
     */
    //new date instance
    const dt_date1 = new Date(date1);
    const dt_date2 = new Date(date2);

    //Get the Timestamp
    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();

    let calc;

    //Check which timestamp is greater
    if (date1_time_stamp > date2_time_stamp) {
      calc = new Date(date1_time_stamp - date2_time_stamp);
    } else {
      calc = new Date(date2_time_stamp - date1_time_stamp);
    }
    //Retrieve the date, month and year
    const calcFormatTmp =
      calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    //Subtract each member of our array from the default date
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    //Set up custom text
    const yrsTxt = ["y", "y"];
    const mnthsTxt = ["m", "m"];
    const daysTxt = ["d", "d"];

    //Convert to days and sum together
    const total_days =
      years_passed * 365 + months_passed * 30.417 + days_passed;

    //display result with custom text
    const result =
      (years_passed == 1
        ? years_passed + " " + yrsTxt[0] + " "
        : years_passed > 1
        ? years_passed + " " + yrsTxt[1] + " "
        : "") +
      (months_passed == 1
        ? months_passed + mnthsTxt[0]
        : months_passed > 1
        ? months_passed + mnthsTxt[1] + " "
        : "") +
      (days_passed == 1
        ? days_passed + daysTxt[0]
        : days_passed > 1
        ? days_passed + daysTxt[1]
        : "");

    //return the result
    return {
      total_days: Math.round(total_days),
      result: result.trim(),
    };
  }
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

  const developerFor = calcDate("07-01-2022", getTodaysDate());

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
        <div className={classes["scroll-bar-fixed"]}></div>
        <h1 className="gradient-text">Developer for: {developerFor.result}</h1>
        <div
          className={classes["scroll-bar"]}
          style={{ width: completion - 15 + "%" }}
        ></div>
      </div>
    </>
  );
}

export default mainNavigation;
