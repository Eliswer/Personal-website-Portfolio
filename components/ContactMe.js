import Wrapper from "./layout/Wrapper";
import classes from "./contactMe.module.css";
import Heading from "./Heading";
import Image from "next/image";

import At from "../public/icons/contact-me/@.svg";
import Phone from "../public/icons/contact-me/phone.svg";
import Time from "../public/icons/contact-me/time.svg";
import PurpleBg from "../public/imgs/contactMe-bg.png";

function ContactMe() {
  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className="contactMe"></div>
        <div className={classes.top}>
          <Heading number="04" title="Contact me" />
        </div>
        <div className={classes.bottom}>
          <form className={`${classes["contact-form"]} ${classes.bg}`}>
            <div className={classes["input-wrapper"]}>
              <label for="name">Enter your name</label>
              <input id="name" className={classes["shared-styling"]}></input>
            </div>
            <div className={classes["input-wrapper"]}>
              <label for="email">Enter your email</label>
              <input
                type="email"
                id="email"
                className={classes["shared-styling"]}
              ></input>
            </div>
            <textarea className={classes["shared-styling"]}></textarea>
            <button>Send Email</button>
          </form>
          <div className={`${classes["contact-info"]} ${classes.bg}`}>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={Phone} />
                <p className={`${classes.title} gradient-text`}>Linkedin</p>
              </div>
              <p className={classes.description}>tbd</p>
            </div>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={At} />
                <p className={`${classes.title} gradient-text`}>Email me</p>
              </div>
              <p className={`${classes.description} ${classes.email}`}>
                sindelarovaeliska.webdev@gmail.com
              </p>
            </div>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={Time} />
                <p className={`${classes.title} gradient-text`}>Availability</p>
              </div>
              <p className={classes.description}>7am - 10pm</p>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <Image src={PurpleBg} alt="Purple background" fill />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactMe;
