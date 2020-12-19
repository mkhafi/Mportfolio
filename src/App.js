import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import diplome from "./img/dip.png";
import experience from "./img/exp.png";
import formation from "./img/frm.jpg";
import image from "./img/img.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <div className="cont">
        <div className="topnav">
          <a href="home">Acceuil</a>
          <a href="contact">Contact</a>
        </div>
      </div>
      <h1>MOUNA KHAFI</h1>
      <hr />
      <h2>Bienvenu sur mon Portefolio!</h2>
      <div className="row">
        <div className="column">
          <div className="content">
            <img src={experience} alt="experience" style={{ width: "95%" }} />
            <h3>Experiences</h3>
            <p>Data Analyst</p>
            <p>Ingénieure SIRH</p>
            <p>Ingénieure développement</p>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <img src={diplome} alt="diplome" style={{ width: "100%" }} />
            <h3>Diplômes</h3>
            <p>Diplôme d’ingénieur d’Etat</p>
            <p>DEUG PS</p>
            <p>Baccalauréat scientifique</p>
          </div>
        </div>
        <div className="column">
          <div class="content">
            <img src={formation} alt="formation" style={{ width: "88%" }} />
            <h3>Formations</h3>
            <p>Formation HRAccess</p>
            <p>ITIL Fondation</p>
            <p>EAI DataExchanger</p>
          </div>
        </div>
      </div>
      <div className="content">
        <img src={image} alt="other" style={{ width: "100%" }} />
        <h3>« Seul on avance vite, ensemble on va plus loin »</h3>
      </div>
    </div>
  );
};
export default App;
