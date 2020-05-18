import React, { Component } from "react";
import { Link } from "react-router-dom";
//material ui
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./JssStyles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      isSnackOpen: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, isSnackOpen: true });
    this.props.handleFormatChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ isSnackOpen: false });
  }

  render() {
    const { level, changeLevel, isShowingAllColors, classes } = this.props;
    const { format, isSnackOpen } = this.state;
    return (
      <div className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">React Color Palette</Link>
        </div>
        {isShowingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={isSnackOpen}
          autoHideDuration={2500}
          onClose={this.closeSnackbar}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedly": "message-id",
          }}
          action={
            <IconButton
              onClick={this.closeSnackbar}
              key="close"
              aria-label="close"
              color="inherit"
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
