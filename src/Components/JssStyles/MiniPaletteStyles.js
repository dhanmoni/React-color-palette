import sizes from "./Sizes";
export default {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover $delete": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    postion: "relative",
    marginBottom: "-7px",
    overflow: "hidden",
  },
  delete: {
    backgroundColor: "#e01b5c",
    padding: "10px",
    position: "absolute",
    top: "0px",
    right: "0px",
    zIndex: "10",
    opacity: 0,
    border: "2px solid white",
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
    [sizes.down("sm")]: {
      padding: "5px",
    },
  },
  deletePaletteIcon: {
    color: "white",
    fontSize: "24px",
  },
};
