import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStage: "form",
      newPaletteName: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.savePaletteName = this.savePaletteName.bind(this);
    this.onSavePalette = this.onSavePalette.bind(this);
  }
  componentDidMount() {
    //check if the palette name is unique or not in the drawer while creating a new color
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }
  savePaletteName() {
    this.setState({ formStage: "emoji" });
  }
  onSavePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPalette);
    this.setState({ formStage: "" });
  }
  //() => handleSubmit(newPaletteName)
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { newPaletteName, formStage } = this.state;
    const { handleSubmit, hideMetaForm } = this.props;
    return (
      <div>
        <Dialog open={formStage === "emoji"} onClose={hideMetaForm}>
          <DialogTitle id="form-dialog-title">
            Choose a palette emoji:
          </DialogTitle>
          <Picker onSelect={this.onSavePalette} />
        </Dialog>

        <Dialog
          open={formStage === "form"}
          onClose={hideMetaForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a palette name:
          </DialogTitle>
          <ValidatorForm onSubmit={this.savePaletteName}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your palette. Make sure it's unique.
              </DialogContentText>
              <TextValidator
                value={newPaletteName}
                placeholder="Palette Name"
                fullWidth
                margin="normal"
                name="newPaletteName"
                onChange={this.handleInputChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "this field is required",
                  "Palette name must be unique",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideMetaForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
