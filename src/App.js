import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import seedColors from "./Components/SeedColors";
import { generatePalette } from "./Components/ColorHelper";
import Palette from "./Components/Palette";
import PaletteList from "./Components/PaletteList";
import SingleColorPalette from "./Components/SingleColorPalette";
import NewPaletteForm from "./Components/NewPaletteForm";
import Page from "./Components/Page";

class App extends Component {
  constructor(props) {
    super(props);
    const allPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: allPalettes || seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.removePalette = this.removePalette.bind(this);
  }

  savePalette(newPalette) {
    this.setState(
      {
        palettes: [...this.state.palettes, newPalette],
      },
      this.syncLocalStorage
    );
  }
  removePalette(id) {
    this.setState(
      (prevState) => ({
        palettes: prevState.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }
  //save data to local storage
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  findId(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    });
  }
  render() {
    const { palettes } = this.state;
    return (
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                      <Page>
                        <PaletteList
                          palette={palettes}
                          deletePalette={this.removePalette}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/create-new-palette"
                    render={(routeProps) => (
                      <Page>
                        <NewPaletteForm
                          savePalette={this.savePalette}
                          palettes={palettes}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={(routeProps) => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findId(routeProps.match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                      <Page>
                        <SingleColorPalette
                          colorId={routeProps.match.params.colorId}
                          palette={generatePalette(
                            this.findId(routeProps.match.params.paletteId)
                          )}
                        />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    );
  }
}

export default App;
