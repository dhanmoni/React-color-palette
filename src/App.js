import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Components/Palette";
import seedColors from "./Components/SeedColors";
import { generatePalette } from "./Components/ColorHelper";
import PaletteList from "./Components/PaletteList";

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
            render={() => <PaletteList palette={seedColors} />}
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
        </Switch>
      </div>
    );
  }
}

export default App;
