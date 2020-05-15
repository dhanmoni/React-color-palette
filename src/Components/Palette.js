import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Styles/Palette.css";

class Palette extends Component {
  render() {
    const colorBox = this.props.colors.map((color) => {
      return <ColorBox background={color.color} name={color.name} />;
    });

    return (
      <div className="palette">
        <div className="palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default Palette;
