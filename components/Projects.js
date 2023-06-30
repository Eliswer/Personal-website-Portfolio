import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Wrapper from "./layout/Wrapper";
import Heading from "./layout/Heading";

import ProjectCard from "./ProjectCard";
import calculator from "../public/imgs/projects-imgs/calculator.png";
import btnGenerator from "../public/imgs/projects-imgs/btn.png";
import jokes from "../public/imgs/projects-imgs/jokes.png";
import nfs from "../public/imgs/projects-imgs/nfs.png";
import tiktaktoe from "../public/imgs/projects-imgs/tiktaktoe.png";
import shoppinglist from "../public/imgs/projects-imgs/shoppinglist.png";
import password from "../public/imgs/projects-imgs/password.png";
import placeholder from "../public/imgs/600x400.svg";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import classes from "./projects.module.css";

/* Objects to create projectCards */
const projects = [
  {
    title: "Button generator",
    img: btnGenerator,
    description: "Make an advanced button and copy it into your project",
    githubLink: "https://github.com/Eliswer/Button-generator",
    externalLink: "https://button-generator-nine.vercel.app/",
    key: "1",
  },
  {
    title: "Shopping list",
    img: shoppinglist,
    description: "Keep track of items you buy with this list",
    githubLink: "https://github.com/Eliswer/Shopping-list",
    externalLink: "https://shopping-list-ruby.vercel.app/",
    key: "2",
  },
  {
    title: "Password Generator",
    img: password,
    description: "Generate a secure password",
    githubLink: "https://github.com/Eliswer/password-generator",
    externalLink: "https://password-generator-theta-ten.vercel.app/",
    key: "3",
  },
  {
    title: "Calculator",
    img: calculator,
    description: "Advanced calculator made with React",
    githubLink: "https://github.com/Eliswer/Calculator-project",
    externalLink: "https://react-calculator-dcknhdcbj-eliswer.vercel.app/",
    key: "4",
  },
  {
    title: "Weather app",
    img: placeholder,
    description: "Search for your city and display the weather data",
    githubLink: "https://github.com/Eliswer/Weather-app",
    externalLink: "",
    key: "5",
  },
  {
    title: "Dad jokes",
    img: jokes,
    description: "Get a new joke after every button click",
    githubLink: "https://github.com/Eliswer/random-dad-jokes",
    externalLink: "https://random-dad-jokes-psi.vercel.app/",
    key: "6",
  },
  {
    title: "NFS box hover effects",
    img: nfs,
    description: "Beautiful effect on hover like on original NFS website",
    githubLink: "https://github.com/Eliswer/need-for-speed-box-hover-effect",
    externalLink:
      "https://need-for-speed-box-hover-effect-82yaqfhc0-eliswer.vercel.app/",
    key: "7",
  },
  {
    title: "Tik tak toe",
    img: tiktaktoe,
    description: "Choose a player img and play against your friend",
    githubLink: "https://github.com/Eliswer/Tik-tak-toe",
    externalLink: "https://tik-tak-toe-six-alpha.vercel.app/",
    key: "8",
  },
];

const renderedProjects = projects.map((project) => {
  return (
    <div key={project.key}>
      <ProjectCard
        title={project.title}
        projectImg={project.img}
        description={project.description}
        githubLink={project.githubLink}
        externalLink={project.externalLink}
      />
    </div>
  );
});

function Projects({ setProjectsToVisited }) {
  /* Sets 03.About me to green if component is visible */
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  useEffect(() => {
    if (myElementIsVisible) {
      setProjectsToVisited();
    }
  }, [myElementIsVisible]);

  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className="projects"></div>
        <div className={classes.top}>
          <Heading number="03" title="Projects" />
        </div>
        <div className={classes.bottom} ref={myRef}>
          <p className={classes.swipe}>Swipe !</p>
          <div className={`${classes["carousel-wrapper"]} carrousel-wrapper`}>
            <AwesomeSlider fillParent bullets={false}>
              {renderedProjects}
            </AwesomeSlider>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;
