import Wrapper from "./layout/Wrapper";
import classes from "./skills.module.css";
import Heading from "./Heading";
import Technologies from "./Technologies";

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
import trello from "../public/icons/icons-software/trello.svg";
import github from "../public/icons/icons-software/github.svg";
import aftereffects from "../public/icons/icons-software/aftereffects.svg";
import vegaspro from "../public/icons/icons-software/vegaspro.svg";
import figma from "../public/icons/icons-software/figma.svg";

const languagesUrls = [
  { alt: "Html logo", src: html },
  { alt: "Css logo", src: css },
  { alt: "Sass logo", src: sass },
  { alt: "JS logo", src: js },
];

const backendTechnologiesUrls = [
  { alt: "Node JS logo", src: nodejs },
  { alt: "Express logo", src: express },
  { alt: "EJS logo", src: ejs },
  { alt: "Rest API logo", src: restapi },
];

const otherUrls = [
  { alt: "Git logo", src: git },
  { alt: "Docker logo", src: docker },
  { alt: "Command line logo", src: commandline },
  { alt: "Redux Toolkit logo", src: reduxtoolkit },
  { alt: "NPM logo", src: npm },
];

const librariesFrameworksUrls = [
  { alt: "Styled Components logo", src: styledcomponents },
  { alt: "Tailwind Css logo", src: tailwind },
  { alt: "React logo", src: react },
  { alt: "Next JS logo", src: nextjs },
];

const softwareUrls = [
  { alt: "Postman logo", src: postman },
  { alt: "Trello logo", src: trello },
  { alt: "Github Desktop logo", src: github },
  { alt: "Adobe After Effects logo", src: aftereffects },
  { alt: "Sony Vegas pro", src: vegaspro },
  { alt: "Figma logo", src: figma },
];

function Skills(props) {
  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className="skills"></div>
        <div className={`${classes.top}`}>
          <Heading number="02" title="Skills" />
        </div>
        <div className={classes["bottom-wrapper"]}>
          <div className={`${classes.bottom} ${classes.b1}`}>
            <Technologies
              techGroup={languagesUrls}
              title={"Languages"}
              width={16}
            />
            <Technologies
              techGroup={backendTechnologiesUrls}
              title={"Backend Technologies"}
              width={16}
            />
            <Technologies techGroup={otherUrls} title={"Other"} width={20} />
          </div>
          <div className={`${classes.bottom} ${classes.b2}`}>
            {" "}
            <Technologies
              techGroup={librariesFrameworksUrls}
              title={"Libraries / Frameworks"}
              width={16}
              bg="white"
            />
            <Technologies
              techGroup={softwareUrls}
              title={"Software"}
              width={23}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Skills;
