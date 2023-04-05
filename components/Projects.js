import Wrapper from "./layout/Wrapper";
import classes from "./projects.module.css";
import Heading from "./Heading";

import { Carousel } from "@trendyol-js/react-carousel";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

import ArrowLeft from "../public/icons/carrousel-arrows/arrow-left.svg";
import ArrowRight from "../public/icons/carrousel-arrows/arrow-right.svg";

const projects = [
  { title: "Weather app", img: "" },
  { title: "Calculator", img: "" },
  { title: "To be added", img: "" },
  { title: "To be added", img: "" },
  { title: "To be added", img: "" },
];

const renderedProjects = projects.map((project) => {
  return <ProjectCard title={project.title} img={project.img} />;
});

const leftArrow = (
  <button
    style={{
      background: "none",
      border: "none",
      height: "100%",
      width: "55px",
    }}
  >
    <Image src={ArrowLeft} />
  </button>
);
const rightArrow = (
  <button
    style={{
      background: "none",
      border: "none",
      height: "100%",
      width: "55px",
    }}
  >
    <Image src={ArrowRight} />
  </button>
);

function Projects() {
  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className="projects"></div>
        <div className={classes.top}>
          <Heading number="03" title="Projects" />
        </div>
        <div className={classes.bottom}>
          <div className={`${classes["carousel-wrapper"]} carrousel-wrapper`}>
            <Carousel
              show={4}
              slide={3}
              swiping={true}
              leftArrow={leftArrow}
              rightArrow={rightArrow}
            >
              {renderedProjects}
            </Carousel>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;
