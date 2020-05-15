import React, { Component } from "react";
import "./Styles/ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div
        className="colorBox"
        style={{ backgroundColor: this.props.background }}
      >
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}

export default ColorBox;
