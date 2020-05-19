import chroma from "chroma-js";
import sizes from "./Sizes";

export default {
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
    [sizes.down("lg")]: {
      height: (props) => (props.showFullPalette ? "20%" : "33.3333%"),
      width: "25%",
    },

    [sizes.down("md")]: {
      height: (props) => (props.showFullPalette ? "10%" : "20%"),
      width: "50%",
    },
    [sizes.down("xs")]: {
      height: (props) => (props.showFullPalette ? "5%" : "10%"),
      width: "100%",
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
    [sizes.down("xs")]: {
      width: "100px",
      height: "30px",
      lineHeight: "30px",
      fontSize: "1rem",
    },
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
    [sizes.down("xs")]: {
      transform: "scale(50)",
    },
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
      [sizes.down("xs")]: {
        fontSize: "4rem",
      },
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
