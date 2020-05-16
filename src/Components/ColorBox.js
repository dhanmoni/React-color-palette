import React, { Component } from "react";
import "./Styles/ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import chroma from "chroma-js";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
    };
    this.changeCopiedState = this.changeCopiedState.bind(this);
  }

  changeCopiedState() {
    this.setState(
      {
        isCopied: true,
      },
      () => {
        setTimeout(() => this.setState({ isCopied: false }), 1500);
      }
    );
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    let isDarkColor = chroma(background).luminance() <= 0.08;
    let isLightColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopiedState}>
        <div className="color-box" style={{ background }}>
          <div className={`copy-msg ${this.state.isCopied && "show"}`}>
            <h1>Copied!</h1>
            <p className={isLightColor && "dark-text"}>{background}</p>
          </div>
          <div
            style={{ background }}
            className={`copy-overlay ${this.state.isCopied && "show"}`}
          />

          <div className={`copy-button ${isLightColor && "dark-text"}`}>
            Copy
          </div>

          <div className={`color-name ${isDarkColor && "light-text"}`}>
            {name}
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <button className={`more-button ${isLightColor && "dark-text"}`}>
                More
              </button>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
