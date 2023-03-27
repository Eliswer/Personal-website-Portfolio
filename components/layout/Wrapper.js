import classes from "./wrapper.module.css";

function Wrapper(props) {
  return (
    <div className={classes.wrapper} style={{ marginTop: props.margin }}>
      {props.children}
    </div>
  );
}

export default Wrapper;
