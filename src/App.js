import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="Contact" component={Contact} />
      </switch>
    </Router>
  );
};
export default App;
