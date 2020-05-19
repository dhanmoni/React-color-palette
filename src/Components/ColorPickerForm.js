import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import styles from "./JssStyles/ColorPickerStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#008080",
      newColorName: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCurrentColorChange = this.handleCurrentColorChange.bind(this);
  }
  componentDidMount() {
    //check if the color name is unique or not in the drawer while creating a new color
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    //check if the color hex value is unique or not in the drawer while creating a new color
    ValidatorForm.addValidationRule("isColorHexUnique", (value) => {
      return this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  handleClick() {
    let newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleCurrentColorChange(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  render() {
    const { isPaletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div className={classes.colorPickerContainer}>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.handleCurrentColorChange}
          className={classes.colorPicker}
        />
        <ValidatorForm onSubmit={this.handleClick} instantValidate={false}>
          <TextValidator
            className={classes.colorNameInput}
            value={newColorName}
            name="newColorName"
            variant="filled"
            placeholder="Color Name"
            onChange={this.handleInputChange}
            validators={["required", "isColorNameUnique", "isColorHexUnique"]}
            errorMessages={[
              "this field is required",
              "Color name must be unique",
              "Color must be unique",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
            type="submit"
            disabled={isPaletteFull}
            className={classes.addColorButton}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
