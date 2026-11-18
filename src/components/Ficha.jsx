import { useState, useEffect } from "react";

export default function Ficha({ nombre, rol }) {
  const clave = `favorito-${nombre}-${rol}`;

  const [favorito, setFavorito] = useState(() => {
    return localStorage.getItem(clave) === "true";
  });

  useEffect(() => {
    localStorage.setItem(clave, String(favorito));
  }, [favorito, clave]);

  return (
    <div>
      <h2>{nombre}</h2>
      <p>Rol: {rol}</p>

      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? "★ Quitar favorito" : "☆ Agregar favorito"}
      </button>
    </div>
  );
}
