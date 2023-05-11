import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Wrapper from "./layout/Wrapper";
import classes from "./skills.module.css";
import Heading from "./layout/Heading";
import Technologies from "./Technologies";
import Image from "next/image";

/**
 * Importing my Icon svgs
 */
import html from "../public/icons/icons-languages/html.svg";
import css from "../public/icons/icons-languages/css.svg";
import sass from "../public/icons/icons-languages/sass.svg";
import js from "../public/icons/icons-languages/js.svg";

import nodejs from "../public/icons/icons-backend/nodejs.svg";
import express from "../public/icons/icons-backend/express.svg";
import ejs from "../public/icons/icons-backend/ejs.svg";
import restapi from "../public/icons/icons-backend/restapi.svg";

import git from "../public/icons/icons-other/git.svg";
import docker from "../public/icons/icons-other/docker.svg";
import commandline from "../public/icons/icons-other/commandline.svg";
import reduxtoolkit from "../public/icons/icons-other/reduxtoolkit.svg";
import npm from "../public/icons/icons-other/npm.svg";

import styledcomponents from "../public/icons/icons-libraries-frameworks/styledcomponents.svg";
import tailwind from "../public/icons/icons-libraries-frameworks/tailwind.svg";
import react from "../public/icons/icons-libraries-frameworks/react.svg";
import nextjs from "../public/icons/icons-libraries-frameworks/nextjs.svg";

import postman from "../public/icons/icons-software/postman.svg";
import github from "../public/icons/icons-software/github.svg";
import aftereffects from "../public/icons/icons-software/aftereffects.svg";
import vegaspro from "../public/icons/icons-software/vegaspro.svg";
import figma from "../public/icons/icons-software/figma.svg";

const languagesUrls = [
  { alt: "Html logo", src: html, level: "green-1" },
  { alt: "Css logo", src: css, level: "green-1" },
  { alt: "Sass logo", src: sass, level: "green-1" },
  { alt: "JS logo", src: js, level: "blue-2" },
];

const backendTechnologiesUrls = [
  { alt: "Node JS logo", src: nodejs, level: "red-4" },
  { alt: "Express logo", src: express, level: "red-4" },
  { alt: "EJS logo", src: ejs, level: "red-4" },
  { alt: "Rest API logo", src: restapi, level: "blue-2" },
];

const otherUrls = [
  { alt: "Git logo", src: git, level: "yellow-3" },
  { alt: "Docker logo", src: docker, level: "red-4" },
  { alt: "Command line logo", src: commandline, level: "yellow-3" },
  { alt: "Redux Toolkit logo", src: reduxtoolkit, level: "blue-2" },
  { alt: "NPM logo", src: npm, level: "blue-2" },
];

const librariesFrameworksUrls = [
  { alt: "Styled Components logo", src: styledcomponents, level: "yellow-3" },
  { alt: "Tailwind Css logo", src: tailwind, level: "blue-2" },
  { alt: "React logo", src: react, level: "blue-2" },
  { alt: "Next JS logo", src: nextjs, level: "yellow-3" },
];

const softwareUrls = [
  { alt: "Postman logo", src: postman, level: "blue-2" },
  { alt: "Github Desktop logo", src: github, level: "green-1" },
  { alt: "Adobe After Effects logo", src: aftereffects, level: "green-1" },
  { alt: "Sony Vegas pro", src: vegaspro, level: "green-1" },
  { alt: "Figma logo", src: figma, level: "yellow-3" },
];

function Skills({ setSkillsToVisited }) {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  if (myElementIsVisible) {
    setSkillsToVisited();
  }

  const grey = "grey-0";
  const [wifi, setWifi] = useState(grey);

  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className="skills"></div>
        <div className={`${classes.top}`}>
          <Heading number="02" title="Skills" />
        </div>
        <div className={classes["bottom-wrapper"]}>
          <div className={classes.bottom} ref={myRef}>
            <Technologies
              techGroup={languagesUrls}
              title={"Languages"}
              width={20}
              setWifi={setWifi}
            />
            <Technologies
              techGroup={backendTechnologiesUrls}
              title={"Backend Technologies"}
              width={20}
              setWifi={setWifi}
            />
            <Technologies
              techGroup={otherUrls}
              title={"Other"}
              width={20}
              setWifi={setWifi}
            />
            <Technologies
              techGroup={librariesFrameworksUrls}
              title={"Libraries / Frameworks"}
              width={20}
              setWifi={setWifi}
            />
            <Technologies
              techGroup={softwareUrls}
              title={"Software"}
              width={20}
              setWifi={setWifi}
            />
          </div>
        </div>
        <div className={classes["wifi-wrapper"]}>
          <div className={classes["wifi-img-wrapper"]}>
            <Image
              src={`/../public/imgs/wifi-strength/${wifi}.png`}
              fill
              alt="wifi img"
            />
          </div>
          <p>Hover over icons to see skill level</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Skills;
