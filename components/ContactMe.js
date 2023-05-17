import { useState } from "react";

import Wrapper from "./layout/Wrapper";
import classes from "./contactMe.module.css";
import Heading from "./layout/Heading";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import At from "../public/icons/contact-me/@.svg";
import Phone from "../public/icons/contact-me/phone.svg";
import Time from "../public/icons/contact-me/time.svg";
import PurpleBg from "../public/imgs/contactMe-bg.png";
import { sendContactForm } from "@/lib/api";

const initValues = { name: "", email: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

function ContactMe({ setContactMeToVisited }) {
  /* Sets 04.Contact me to green if component is visible */
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  if (myElementIsVisible) {
    setContactMeToVisited();
  }

  /* States and functions to send myself an email if someone fills up my contact form */
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  let disabled = true;

  const { values, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  if (!values.name || !values.email || !values.message) {
    disabled = true;
  } else {
    disabled = false;
  }

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Wrapper>
      <div className={classes.wrapper} ref={myRef}>
        <div className="contactMe"></div>
        <div className={classes.top}>
          <Heading number="04" title="Contact me" />
        </div>
        {error && <h1 className={classes.errorMsg}>{error}</h1>}
        <div className={classes.bottom}>
          <form className={`${classes["contact-form"]} ${classes.bg}`}>
            <div className={classes["input-wrapper"]}>
              <label htmlFor="name">Enter your name</label>
              <input
                style={{
                  borderColor: touched.name && !values.name ? "red" : "",
                }}
                name="name"
                id="name"
                className={classes["shared-styling"]}
                defaultValue={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              ></input>
            </div>
            <div className={classes["input-wrapper"]}>
              <label htmlFor="email">Enter your email</label>
              <input
                style={{
                  borderColor: touched.name && !values.name ? "red" : "",
                }}
                type="email"
                id="email"
                name="email"
                className={classes["shared-styling"]}
                defaultValue={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              ></input>
            </div>
            <textarea
              style={{ borderColor: touched.name && !values.name ? "red" : "" }}
              className={classes["shared-styling"]}
              defaultValue={values.message}
              onChange={handleChange}
              onVBlur={onBlur}
              name="message"
            ></textarea>
            <button disabled={disabled} onClick={onSubmit}>
              Send Email
            </button>
          </form>
          <div className={`${classes["contact-info"]} ${classes.bg}`}>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={Phone} alt="phone icon" />
                <p className={`${classes.title} gradient-text`}>Linkedin</p>
              </div>
              <p className={classes.description}>tbd</p>
            </div>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={At} alt="@ icon" />
                <p className={`${classes.title} gradient-text`}>Email me</p>
              </div>
              <p className={`${classes.description} ${classes.email}`}>
                sindelarovaeliska.webdev@gmail.com
              </p>
            </div>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={Time} alt="clock icon" />
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
