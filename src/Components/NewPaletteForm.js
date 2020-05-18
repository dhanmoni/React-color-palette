import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { ChromePicker } from "react-color";
import DraggableColorBoxList from "./DraggableColorBoxList";
import arrayMove from "array-move";
import NewPaletteFormNav from "./NewPaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import styles from "./JssStyles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: this.props.palettes[0].colors,
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
    });
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName
      .toLocaleLowerCase()
      .replace(/ /g, "-");
    newPalette.colors = this.state.colors;

    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  removeColor(removeColor) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== removeColor),
    });
  }
  clearPalette() {
    this.setState({
      colors: [],
    });
  }
  randomColor() {
    let allColors = this.props.palettes.map((p) => p.colors).flat();
    let random = Math.floor(Math.random() * allColors.length);
    let randomColor = allColors[random];
    this.setState({
      colors: [...this.state.colors, randomColor],
    });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };
  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = maxColors <= colors.length;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NewPaletteFormNav
          open={open}
          palettes={palettes}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmit={this.handleSubmit}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContainer}>
            <Typography variant="h5" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color={isPaletteFull ? "grey" : "primary"}
                onClick={this.randomColor}
                disabled={isPaletteFull}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              addNewColor={this.addNewColor}
              isPaletteFull={isPaletteFull}
              colors={this.state.colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorBoxList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
