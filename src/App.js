import React from "react";
import Palette from "./Components/Palette";
import seedColor from "./Components/SeedColors";

function App() {
  return (
    <div>
      <Palette {...seedColor[2]} />
    </div>
  );
}

export default App;
