import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./JssStyles/PaletteFooterStyles";
import { Link } from "react-router-dom";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      <Link to="/">{paletteName}</Link>
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
