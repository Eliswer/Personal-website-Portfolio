import Wrapper from "./layout/Wrapper";
import classes from "./projects.module.css";
import Heading from "./layout/Heading";

import ProjectCard from "./ProjectCard";
import Image from "next/image";

import ArrowLeft from "../public/icons/carrousel-arrows/arrow-left.svg";
import ArrowRight from "../public/icons/carrousel-arrows/arrow-right.svg";

import calculator from "../public/imgs/projects-imgs/calculator.png";
import placeholder from "../public/imgs/600x400.svg";

import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

const projects = [
  {
    title: "Weather app",
    img: placeholder,
    description: "",
    githubLink: "https://github.com/Eliswer/Weather-app",
    externalLink: "",
  },
  {
    title: "Calculator",
    img: calculator,
    description: "Advanced calculator made with React",
    githubLink: "https://github.com/Eliswer/Calculator-project",
    externalLink: "https://react-calculator-dcknhdcbj-eliswer.vercel.app/",
  },
  {
    title: "To be added",
    img: placeholder,
    description: "",
    githubLink: "",
    externalLink: "",
  },
  {
    title: "To be added",
    img: placeholder,
    description: "",
    githubLink: "",
    externalLink: "",
  },
  {
    title: "To be added",
    img: placeholder,
    description: "",
    githubLink: "",
    externalLink: "",
  },
];

const renderedProjects = projects.map((project) => {
  return (
    <ProjectCard
      title={project.title}
      projectImg={project.img}
      description={project.description}
      githubLink={project.githubLink}
      externalLink={project.externalLink}
    />
  );
});

const arrowStyle = {
  background: "none",
  border: "none",
  height: "100%",
  width: "55px",
  cursor: "pointer",
};

const leftArrow = (
  <button style={arrowStyle}>
    <Image src={ArrowLeft} />
  </button>
);

const rightArrow = (
  <button style={arrowStyle}>
    <Image src={ArrowRight} />
  </button>
);

function Projects() {
  const [projectsShown, setProjectsShown] = useState(4);
  const breakPoint = useMediaQuery();

  useEffect(() => {
    setProjectsShown(breakPoint ? 2 : 4);
  }, [breakPoint]);

  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className="projects"></div>
        <div className={classes.top}>
          <Heading number="03" title="Projects" />
        </div>
        <div className={classes.bottom}>
          <div className={`${classes["carousel-wrapper"]} carrousel-wrapper`}>
            {renderedProjects}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;
