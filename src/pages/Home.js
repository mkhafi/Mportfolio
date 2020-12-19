import React from "react";

const Home = () => {
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
            <img
              src="./img/exp.png"
              alt="experience"
              style={{ width: "95%" }}
            />
            <h3>Experiences</h3>
            <p>Data Analyst</p>
            <p>Ingénieure SIRH</p>
            <p>Ingénieure développement</p>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <img src="./img/dip.png" alt="diplome" style={{ width: "100%" }} />
            <h3>Diplômes</h3>
            <p>Diplôme d’ingénieur d’Etat</p>
            <p>DEUG PS</p>
            <p>Baccalauréat scientifique</p>
          </div>
        </div>
        <div className="column">
          <div class="content">
            <img src="./img/frm.jpg" alt="formation" style={{ width: "88%" }} />
            <h3>Formations</h3>
            <p>Formation HRAccess</p>
            <p>ITIL Fondation</p>
            <p>EAI DataExchanger</p>
          </div>
        </div>
      </div>
      <div className="content">
        <img src="./img/img.jpg" alt="other" style={{ width: "100%" }} />
        <h3>« Seul on avance vite, ensemble on va plus loin »</h3>
      </div>
    </div>
  );
};
export default Home;
