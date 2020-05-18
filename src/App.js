import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Components/Palette";
import seedColors from "./Components/SeedColors";
import { generatePalette } from "./Components/ColorHelper";
import PaletteList from "./Components/PaletteList";
import SingleColorPalette from "./Components/SingleColorPalette";
import NewPaletteForm from "./Components/NewPaletteForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  findId(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palette={this.state.palettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/create-new-palette"
            render={(routeProps) => (
              <NewPaletteForm
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findId(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findId(routeProps.match.params.paletteId)
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
