import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

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
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        name={color.name}
        key={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="single-color-palette palette">
        <Navbar
          handleFormatChange={this.handleFormatChange}
          isShowingAllColors={false}
        />
        <div className="palette-colors">
          {colorBoxes}
          <div className="go-back color-box">
            <Link to={`/palette/${id}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
