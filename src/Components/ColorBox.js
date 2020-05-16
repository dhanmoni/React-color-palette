import React, { Component } from "react";
import "./Styles/ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
  ColorBox: {
    height: (props) => (props.showFullPalette ? "25%" : "50%"),
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-8px",
    "&:hover button": {
      opacity: "1",
      transition: "opacity 0.5s",
    },
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.7)" : "white",
    width: "120px",
    height: "50px",
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
    opacity: "0",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08
        ? "white"
        : "rgba(0,0,0,0.7)",
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "10px",
    fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: "400",
  },
  moreButton: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08
        ? "white"
        : "rgba(0,0,0,0.7)",
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "50px",
    height: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textAlign: "center",
    lineHeight: "30px",
    fontSize: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "300",
    fontFamily: "Poppins",
    textTransform: "uppercase",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    transform: "scale(20)",
    position: "absolute",
    opacity: "1",
    zIndex: "10",
  },
  copyMsg: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",
    transform: "scale(1.5)",
    zIndex: "-20",
    color: "white",
    flexDirection: "column",
    fontSize: "4rem",
    "& h1": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      fontWeight: "400",
      textShadow: "1px 1.5px black",
      width: "100%",
      textAlign: "center",
      textTransform: "uppercase",
    },
    "& p": {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7
          ? "rgba(0,0,0,0.7)"
          : "white",
      fontWeight: "300",
      fontSize: "2rem",
    },
  },
  copyMsgShow: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.35s ease-in-out",
    transitionDelay: "0.3s",
  },
};

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
    const { name, background, moreUrl, showFullPalette, classes } = this.props;
    // let isDarkColor = chroma(background).luminance() <= 0.08;
    // let isLightColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopiedState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            className={`${classes.copyMsg} ${
              this.state.isCopied && classes.copyMsgShow
            }`}
          >
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${
              this.state.isCopied && classes.showOverlay
            }`}
          />

          <button className={classes.copyButton}>Copy</button>

          <div className={classes.colorName}>{name}</div>
          {showFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <button className={classes.moreButton}>More</button>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
