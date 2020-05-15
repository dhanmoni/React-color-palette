import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Styles/Palette.css";
import Navbar from "./Navbar";

class Palette extends Component {
  constructor() {
    super();
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBox = colors[level].map((color) => {
      return <ColorBox background={color.hex} name={color.name} />;
    });

    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default Palette;
