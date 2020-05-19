import sizes from "./Sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#394bad",
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    overflowY: "auto",
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("md")]: {
      width: "80%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",

    "& h1": {
      fontSize: "24px",
      marginLeft: "2%",
      [sizes.down("sm")]: {
        fontSize: "16px",
        marginLeft: "0",
      },
    },
    "& a": {
      color: "white",
      fontFamily: "Poppins",
      fontSize: "16px",
      marginRight: "2%",
      [sizes.down("sm")]: {
        fontSize: "12px",
        marginRight: "0",
      },
    },
  },
  palettes: {
    width: "100%",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "3%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 47%)",
      gridGap: "3%",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 99%)",
      gridGap: "1%",
    },
  },
};
