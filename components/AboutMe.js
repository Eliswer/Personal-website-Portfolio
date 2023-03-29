import Wrapper from "./layout/Wrapper";
import classes from "./aboutMe.module.css";
import Image from "next/image";

import Me from "../public/imgs/mypicture.svg";
import Triangle from "../public/imgs/PurpleTriangleWider.png";

function AboutMe() {
  return (
    <>
      <Wrapper margin="3.4rem">
        <div className={classes.triangleWrapper}>
          <Image
            src={Triangle}
            width={600}
            height={650}
            alt="Purple Triangle"
          />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.top}>
            <div className={classes.picture}>
              <div className={classes["img-wrapper"]}>
                <Image src={Me} width={280} alt="my-picture" />
              </div>
            </div>
            <div className={classes.info}>
              <p className={`${classes.t1} gradient-text`}>Hi, my name is</p>
              <h1 className={`${classes.t2} gradient-text`}>
                Eliška Šindelářová
              </h1>
              <p className={`${classes.t3} gradient-text`}>
                A high school graduate looking to start her journey as a
              </p>
              <h2 className={`${classes.t4} gradient-text`}>
                Junior front end developer
              </h2>
            </div>
          </div>
          <div className={classes.description}>
            <p>
              I am a self-taught 19yo developer based in Amstetten - Austria and
              is not so long ago, when I developed an interest for programming.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
