import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/*----------Importing Navbar.js----------*/}
      <Navbar />

      {/*----------Importing Home.js----------*/}
      <Route path="/" exact>
        <Home />
      </Route>

      {/*----------Importing Contact.js----------*/}
      <Route path="/contact">
        <Contact />
      </Route>

      {/*----------Importing About.js----------*/}
      <Route path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
