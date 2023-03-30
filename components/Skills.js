import Wrapper from "./layout/Wrapper";
import classes from "./skills.module.css";
import Heading from "./Heading";

const languagesUrls = [
  { alt: "Html logo", url: "" },
  { alt: "Css logo", url: "" },
  { alt: "Sass logo", url: "" },
  { alt: "JS logo", url: "" },
];

const backendTechnologiesUrls = [
  { alt: "Node JS logo", url: "" },
  { alt: "Express logo", url: "" },
  { alt: "EJS logo", url: "" },
  { alt: "Rest API logo", url: "" },
];

const otherUrls = [
  { alt: "Git logo", url: "" },
  { alt: "Docker logo", url: "" },
  { alt: "Command line logo", url: "" },
  { alt: "Redux Toolkit logo", url: "" },
  { alt: "NPM logo", url: "" },
];

const librariesFrameworksUrls = [
  { alt: "Styled Components logo", url: "" },
  { alt: "Tailwind Css logo", url: "" },
  { alt: "jQuery logo", url: "" },
  { alt: "React logo", url: "" },
];

const softwareUrls = [
  { alt: "VScode logo", url: "" },
  { alt: "PHPstorm logo", url: "" },
  { alt: "Postman logo", url: "" },
  { alt: "Trello logo", url: "" },
  { alt: "Github Desktop logo", url: "" },
  { alt: "Adobe After Effects logo", url: "" },
  { alt: "Sony Vegas pro", url: "" },
  { alt: "Figma logo", url: "" },
];

function Skills(props) {
  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <Heading number="02" title="Skills" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Skills;
