import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <button disabled={!checked}>I'm a button</button>
      <input
        onChange={(e) => setChecked(e.target.value)}
        type='checkbox'
        value={checked}
      />
    </div>
  );
}

export default App;
