import React, { Component } from "react";
import "./Styles/ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopiedState}>
        <div className="color-box" style={{ background }}>
          <div className={`copy-msg ${this.state.isCopied && "show"}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div
            style={{ background }}
            className={`copy-overlay ${this.state.isCopied && "show"}`}
          />

          <div className="copy-button">Copy</div>

          <div className="color-name">{name}</div>
          <button className="more-button">More</button>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
