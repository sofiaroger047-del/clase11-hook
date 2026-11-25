
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function BuscadorPokemon() {
  const [nombre, setNombre] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [repeticion, setRepeticion] = useState(0);
  const [errorEntrada, setErrorEntrada] = useState("");

  const url = busqueda
    ? `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(busqueda)}`
    : null;

  const {
    datos: pokemon,
    cargando,
    error
  } = useFetch(url, repeticion);

  function buscarPokemon(evento) {
    evento.preventDefault();

    const nombreLimpio = nombre.trim().toLowerCase();

    if (!nombreLimpio) {
      setErrorEntrada("Escribí el nombre de un Pokémon.");
      setBusqueda("");
      return;
    }

    setErrorEntrada("");
    setBusqueda(nombreLimpio);
    setRepeticion(r => r + 1);
  }

  return (
    <div>
      <h2>Buscador de Pokémon</h2>

      <form onSubmit={buscarPokemon}>
        <input
          type="text"
          placeholder="Ejemplo: pikachu"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <button type="submit">
          Buscar
        </button>
      </form>

      {cargando && <p>Buscando Pokémon...</p>}

      {errorEntrada && <p>{errorEntrada}</p>}

      {error && <p>Error: {error}</p>}

      {!cargando && !error && pokemon && (
        <div>
          <h3>{pokemon.name}</h3>

          {pokemon.sprites.front_default && (
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="150"
            />
          )}

          <p>
            Tipo: {pokemon.types
              .map((tipo) => tipo.type.name)
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}


