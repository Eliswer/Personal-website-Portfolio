import Wrapper from "./layout/Wrapper";
import classes from "./projects.module.css";
import Heading from "./Heading";

function Projects() {
  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <Heading number="03" title="Projects" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;
