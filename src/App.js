import React from "react";
import Palette from "./Components/Palette";
import seedColor from "./Components/SeedColors";
import { generatePalette } from "./Components/ColorHelper";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColor[0])} />
    </div>
  );
}

export default App;
