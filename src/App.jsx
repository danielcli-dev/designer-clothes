import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Filter from "./Filter";
import Home from "./Home";
import Admin from "./Admin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/admin"
            element={
              <>
                {" "}
                <Header />
                <Admin />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Filter />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
