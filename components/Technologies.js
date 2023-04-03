import classes from "./technologies.module.css";

import Image from "next/image";

function Skills({ techGroup, title, width }) {
  const renderedIcons = techGroup.map((icon) => {
    return <Image src={icon.src} width={50} height={50} />;
  });

  return (
    <div className={classes.wrapper} style={{ width: width + "rem" }}>
      <p className={classes.title}>{title}</p>
      <div className={classes["icons-wrapper"]}>{renderedIcons}</div>
    </div>
  );
}

export default Skills;
