import sizes from "./Sizes";
export default {
  palette: {
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  paletteColors: {
    height: "88%",
  },
  goBack: {
    height: "50%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-8px",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "120px",
      height: "50px",
      textAlign: "center",
      lineHeight: "50px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      fontSize: "1.4rem",
      border: "2px solid white",
      borderRadius: "5px",
      textDecoration: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      [sizes.down("xs")]: {
        height: "30px",
        lineHeight: "30px",
        fontSize: "1rem",
      },
    },
    [sizes.down("lg")]: {
      height: "33.3333%",
      width: "25%",
    },
    [sizes.down("md")]: {
      height: "20%",
      width: "50%",
    },
    [sizes.down("xs")]: {
      height: "10%",
      width: "100%",
    },
  },
};
