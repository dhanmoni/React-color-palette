import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./JssStyles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
    this.handleGoToPalette = this.handleGoToPalette.bind(this);
  }

  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  handleGoToPalette() {
    this.props.goToPalette(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors } = this.props;
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
      <div className={classes.root} onClick={this.handleGoToPalette}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deletePaletteIcon}
            onClick={this.deletePalette}
          />
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <div className={classes.title}>
          {paletteName} <span>{emoji}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
