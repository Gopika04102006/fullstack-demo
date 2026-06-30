import { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = async () => {
    const response = await fetch("http://localhost:3000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ a, b })
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <input
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="A"
      />

      <input
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="B"
      />

      <button onClick={handleAdd}>Add</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;