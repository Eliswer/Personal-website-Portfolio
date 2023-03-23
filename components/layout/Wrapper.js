import MainNavigation from "./MainNavigation";
import classes from "./wrapper.module.css";

function Wrapper(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Wrapper;
