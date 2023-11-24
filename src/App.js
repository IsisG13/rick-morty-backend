import "./App.css";
import rickMorty from "./rickMorty.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [RM, setRM] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/rickMorty")
      .then((response) => {
        setRM(response.data);
      })
      .catch((error) => {
        console.log("Erro ao achar o personagem", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={rickMorty} alt="Rick and Morty" /> <h2>Rick and Morty</h2>
      </header>
      <main className="App-main">
          {RM.map((personagem) => (
              <div key={personagem.id}>
                <div className="posts">
                  <img
                    className="img-post"
                    src={personagem.image}
                    alt={personagem.name}
                  />
                  <div className="informacoes">
                    <h3>
                      <a href={personagem.name_url} target="_blank">{personagem.name}</a>
                    </h3>
                    <p>{personagem.status_species}</p>
                    <h4 className="local">Lest known location: </h4>
                    <a href={personagem.location_url}>{personagem.location_name}</a>
                  </div>
                </div>
                <br/>
              </div>
            ))}
      </main>
    </div>
  );
}

export default App;
