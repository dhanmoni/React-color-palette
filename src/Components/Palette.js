import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Styles/Palette.css";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

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
    const { level, format } = this.state;
    const colorBox = colors[level].map((color) => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          moreUrl={`/palette/${id}/${color.id}`}
          showLink
        />
      );
    });

    return (
      <div className="palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.handleFormatChange}
          isShowingAllColors
        />
        <div className="palette-colors">{colorBox}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
