import { useState } from "react";
import "./App.css";


function App() {
  const [team1, setTeam1] = useState(0);
  const [team2 , setTeam2] = useState(0);


  function Marcador1(){
    setTeam1(team1 + 1)
  }

  function Marcador2(){
    setTeam2(team2 + 1)
  }



  return (
    <>
      <div className="mainContainer">
        <section className="mainSection">
          <div className="box">
            <section className="equipo">
              <div className="contenedorImg">
                <img src="/brazil.jpg" alt="" />
              </div>
              <h2 className="marcador">{team1}</h2>
            </section>
            <section className="equipo">
              <div className="contenedorImg">
                <img src="/argentina.jpg" alt="" />
              </div>
              <h2 className="marcador">{team2}</h2>
            </section>
          </div>
            <section className="btn">
              <button onClick={Marcador1}>GOL!!!!</button>
              <button onClick={Marcador2}>GOL!!!!</button>
            </section>
        </section>
      </div>
    </>
  );
}

export default App;
