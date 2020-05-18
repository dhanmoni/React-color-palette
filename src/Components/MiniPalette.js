import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./JssStyles/MiniPaletteStyles";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map((color) => {
    return (
      <div
        className={classes.miniColor}
        key={color.name}
        style={{ backgroundColor: color.color }}
      ></div>
    );
  });
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
