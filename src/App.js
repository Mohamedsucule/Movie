import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import "./App.css";
import AboutPage from "./Pages/AboutPage";
import Discover from "./Pages/Discover";
import Homepage from "./Pages/HomePage";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <div className="App">
      ;
      <NavBar />
      <Switch></Switch>
    </div>
  );
}

export default App;
