// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("");
  const handleColor = () => {};
  return (
    <div className="App">
      <Display setColor={handleColor} />
      <Input />
    </div>
  );
}

export default App;
