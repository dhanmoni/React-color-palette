export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "7vh",
  },
  logo: {
    height: "100%",
    backgroundColor: "#eceff1",
    marginRight: "15px",
    padding: "0 10px",
    fontSize: "22px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  slider: {
    width: "340px",
    margin: "5px 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "10px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
      backgroundColor: "green",
      outline: "none",
      border: "none",
      boxShadow: "none",
      width: "15px",
      height: "15px",
      marginTop: "-3px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
