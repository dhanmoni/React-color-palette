import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Components/Palette";
import seedColors from "./Components/SeedColors";
import { generatePalette } from "./Components/ColorHelper";
import PaletteList from "./Components/PaletteList";
import SingleColorPalette from "./Components/SingleColorPalette";
class App extends Component {
  findId(id) {
    return seedColors.find((palette) => {
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
              <PaletteList palette={seedColors} {...routeProps} />
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
