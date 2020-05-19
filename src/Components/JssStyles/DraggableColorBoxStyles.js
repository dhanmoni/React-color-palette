import sizes from "./Sizes";
import chroma from "chroma-js";
const styles = {
  root: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-8px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)",
    },
    [sizes.down("lg")]: {
      height: "20%",
      width: "25%",
    },
    [sizes.down("md")]: {
      height: "10%",
      width: "50%",
    },
    [sizes.down("sm")]: {
      height: "5%",
      width: "100%",
    },
  },
  boxContent: {
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px",
    textTransform: "uppercase",
    width: "100%",
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255, 255, 255, 0.8)"
        : "rgba(0,0,0,0.7)",
    "& span": {
      fontSize: "10px",
    },
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};
export default styles;
