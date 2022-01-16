import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (string) => {
  if (!string || string.length === 1) return string;

  return string
    .split("")
    .map((char, i) => {
      if (char === char.toUpperCase() && i !== 0) {
        return " " + char;
      }
      return char;
    })
    .join("");
};

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' />
    </div>
  );
}

export default App;
