
import { useState } from "react";

import Reloj from "./components/Reloj.jsx";
import ClicksYRenders from "./components/ClicksYRenders.jsx";
import Ficha from "./components/Ficha.jsx";
import ContadorDeVisitas from "./components/ContadorDeVisitas.jsx";
import ContadorDeCafes from "./components/ContadorDeCafes.jsx";
import PerfilGitHub from "./components/PerfilGitHub.jsx";
import BuscadorPokemon from "./components/BuscadorPokemon.jsx";
import ListaTareasA from "./components/ListaTareasA.jsx";
import ListaTareasB from "./components/ListaTareasB.jsx";

export default function App() {
  const [mostrarReloj, setMostrarReloj] = useState(true);

  return (
    <div>
      <h1>Clase 11 - Hooks de React</h1>

      <h2>Ejercicio 1 - Reloj</h2>

      <button onClick={() => setMostrarReloj(!mostrarReloj)}>
        {mostrarReloj ? "Ocultar reloj" : "Mostrar reloj"}
      </button>

      {mostrarReloj && <Reloj />}

      <hr />

      <h2>Ejercicio 2 - Clicks y renders</h2>
      <ClicksYRenders />

      <hr />

      <h2>Ejercicio 3 - Fichas favoritas</h2>
      <Ficha nombre="Camila" rol="Estudiante" />
      <Ficha nombre="Alex" rol="Diseñador" />

      <hr />

      <h2>Ejercicio 4 - Hooks personalizados</h2>
      <ContadorDeVisitas />
      <ContadorDeCafes />

      <hr />

      <h2>Fetching Data - Ejercicio 2</h2>
      <PerfilGitHub usuario="sofiaroger047-del" />

      <hr />

      <h2>Fetching Data - Ejercicio 3</h2>
      <BuscadorPokemon/>

      <hr />

      <h2>Anexo II - Ejercicio 3</h2>
      <ListaTareasA/>

      <hr />

      <h2>Anexo II - Ejercicio 4</h2>
      <ListaTareasB/>

    </div>
  );
}

