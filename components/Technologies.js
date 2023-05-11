import classes from "./technologies.module.css";

import Image from "next/image";

function Skills({ techGroup, title, width, setWifi }) {
  const grey = "grey-0";

  const renderedIcons = techGroup.map((icon) => {
    return (
      <div
        className={classes["img-wrapper"]}
        key={icon.alt}
        /* Sets wifi im to a proper colour on hover over icons */
        onMouseEnter={() => {
          setWifi(icon.level);
        }}
        /* Sets wifi img to grey when mouse leaves an icon */
        onMouseLeave={() => {
          setWifi(grey);
        }}
      >
        <Image src={icon.src} alt={icon.alt} fill />
      </div>
    );
  });

  return (
    <>
      <div className={classes.wrapper} style={{ width: width + "rem" }}>
        <p className={classes.title}>{title}</p>
        <div className={classes["icons-wrapper"]}>{renderedIcons}</div>
      </div>
    </>
  );
}

export default Skills;
