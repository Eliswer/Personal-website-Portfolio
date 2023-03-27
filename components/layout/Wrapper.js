import classes from "./wrapper.module.css";

function Wrapper(props) {
  return (
    <div className={classes.wrapper} style={{ marginTop: props.margin }}>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Wrapper;
