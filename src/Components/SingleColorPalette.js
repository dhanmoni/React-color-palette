import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
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
  goBack: {
    height: "50%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-8px",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "120px",
      height: "40px",
      textAlign: "center",
      lineHeight: "40px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      fontSize: "1.4rem",
      border: "2px solid white",
      borderRadius: "5px",
      textDecoration: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
  },
};

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this._shades = this.generateShade(this.props.palette, this.props.colorId);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  generateShade(palette, colorIdToShow) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorIdToShow)
      );
    }
    return shades.slice(1);
  }
  handleFormatChange(val) {
    this.setState({ format: val });
  }
  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        name={color.name}
        key={color.name}
        background={color[format]}
        showFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          handleFormatChange={this.handleFormatChange}
          isShowingAllColors={false}
        />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
