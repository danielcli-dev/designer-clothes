import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Filter from "./Filter";
import Home from "./Home";
import Admin from "./Admin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Filter />
      <Admin/>
      <Home />
    </div>
  );
}

export default App;
