import classes from "./projectCard.module.css";
import Image from "next/image";

import githubLinkIcon from "../public/icons/projects-links/github.svg";
import extLinkIcon from "../public/icons/projects-links/external-link.svg";

function ProjectCard({
  title,
  projectImg,
  description,
  githubLink,
  externalLink,
}) {
  return (
    <div className={classes.wrapper}>
      <h2 className={`${classes.title} gradient-text`}>{title}</h2>
      <div className={classes["description-wrapper"]}>
        <div className={classes.projectImgWrapper}>
          <Image
            src={projectImg}
            alt="project image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className={classes.description}>{description}</p>
        <div className={classes["icons-wrapper"]}>
          <a href={githubLink}>
            <Image src={githubLinkIcon} alt="github icon" width={20} />
          </a>
          <a href={externalLink}>
            <Image src={extLinkIcon} alt="external link icon" width={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
