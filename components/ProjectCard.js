import classes from "./projectCard.module.css";

function ProjectCard({ title }) {
  return (
    <div className={classes.wrapper}>
      <h2 className={`${classes.title} gradient-text`}>{title}</h2>
      <p>Placeholder</p>
    </div>
  );
}

export default ProjectCard;
