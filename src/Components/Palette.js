import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

const styles = {
  palette: {
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  paletteColors: {
    height: "88%",
  },
};

class Palette extends Component {
  constructor() {
    super();
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  handleFormatChange(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBox = colors[level].map((color) => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          moreUrl={`/palette/${id}/${color.id}`}
          showFullPalette
        />
      );
    });

    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.handleFormatChange}
          isShowingAllColors
        />
        <div className={classes.paletteColors}>{colorBox}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
