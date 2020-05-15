import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Styles/Palette.css";
import Navbar from "./Navbar";

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
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBox = colors[level].map((color) => {
      return (
        <ColorBox background={color[format]} name={color.name} key={color.id} />
      );
    });

    return (
      <div className="palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="palette-colors">{colorBox}</div>
        <footer className="palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
