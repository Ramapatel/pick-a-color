import "./App.css";
import React from "react";
import ColorPicker from "./Components/ColorPicker";

function App() {
  const colors = [
    "#ff0000",
    "#00bc1a",
    "#0d11d3",
    "#fffa1b",
    "#ff32e6",
    "#32fff7",
    "#fea700",
    "#7c007e",
    "#ffc4c4",
    "#2f5a24",
    "#f6693d",
    "#662c1a",
    "#ff810d",
    "#5da9d4",
    "#fff960",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ColorPicker colors={colors} />
      </header>
    </div>
  );
}

export default App;
