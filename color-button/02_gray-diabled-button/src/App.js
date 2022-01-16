import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const nextColor = color === "red" ? "blue" : "red";

  useEffect(() => {
    console.log(color);
  }, [checked, color]);

  return (
    <div>
      <button
        onClick={() => setColor(nextColor)}
        style={{ backgroundColor: checked ? "gray" : color }}
      >
        Change to {nextColor}
      </button>
      <input
        onChange={() => setChecked(!checked)}
        type='checkbox'
        value={checked}
      />
    </div>
  );
}

export default App;
