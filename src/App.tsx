import { useState } from "react";
import "./App.css";
import Palya from "./components/Palya";

function App() {

  const [lista, setLista] = useState(["O", "X", "O", "X", "O", "X"]);
  const [lepes, setlepes] = useState(0);

  function kivalaszt(index: number) {
    setlepes(lepes + 1);

    const listaMasolat = [...lista]
    lepes % 2 ? listaMasolat[index] = "X" : listaMasolat[index] = "O"
    setLista(listaMasolat)
  }

  return (
    <>
      <main>
        <header><h1>Tic-Tac-Toe</h1></header>
        <article>
          <Palya lista={lista} kivalaszt={kivalaszt}></Palya>
        </article>
        <footer><p>Készítette: Nao</p></footer>
      </main>
    </>
  );
}

export default App;
