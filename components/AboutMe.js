import Wrapper from "./layout/Wrapper";
import classes from "./aboutMe.module.css";
import Image from "next/image";

import Me from "../public/imgs/mypicture.jpg";

function AboutMe() {
  return (
    <>
      <Wrapper margin="3.4rem">
        <div className={classes.wrapper}>
          <div className={classes.top}>
            <div className={classes.picture}>
              <div className={classes["img-wrapper"]}></div>
              <Image src={Me} width="219" alt="my-picture" />
            </div>
            <div className={classes.info}>About me</div>
          </div>
          <div className={classes.description}>Description</div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
