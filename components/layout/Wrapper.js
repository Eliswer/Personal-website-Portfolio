import classes from "./wrapper.module.css";

/* Wrapper that sets the width and height for my components */
function Wrapper(props) {
  return (
    <div className={classes.wrapper} style={{ marginTop: props.margin }}>
      {props.children}
    </div>
  );
}

export default Wrapper;
