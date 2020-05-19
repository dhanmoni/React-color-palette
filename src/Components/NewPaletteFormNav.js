import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./JssStyles/NewPaletteFormNavStyles";

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingMetaForm: false,
    };
    this.showMetaForm = this.showMetaForm.bind(this);
    this.hideMetaForm = this.hideMetaForm.bind(this);
  }
  showMetaForm() {
    this.setState({
      showingMetaForm: true,
    });
  }
  hideMetaForm() {
    this.setState({
      showingMetaForm: false,
    });
  }
  render() {
    const { open, classes, handleSubmit, palettes } = this.props;
    const { showingMetaForm } = this.state;
    return (
      <div>
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.headerText}
            >
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.showMetaForm}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {showingMetaForm && (
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            palettes={palettes}
            hideMetaForm={this.hideMetaForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteFormNav);
