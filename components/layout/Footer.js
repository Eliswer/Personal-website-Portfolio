import classes from "./footer.module.css";

function Footer() {
  return (
    <div style={{ position: "relative" }}>
      <div className={classes.footer}>
        <p>Designed and built by Eliška Šindelářová</p>
        <p>#2023</p>
      </div>
    </div>
  );
}

export default Footer;
