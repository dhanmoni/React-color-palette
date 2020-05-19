import { DRAWER_WIDTH } from "../Constants/Constants";
import sizes from "./Sizes";
const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("md")]: {
      marginRight: "0",
    },
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("md")]: {
      margin: "0 0.1rem",
      padding: 0,
    },
  },
  headerText: {
    [sizes.down("md")]: {
      padding: 0,
      marginLeft: 0,
    },
  },
});

export default styles;
