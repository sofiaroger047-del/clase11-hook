
import { useState, useEffect } from "react";

export function useFetch(url, repeticion = 0) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(Boolean(url));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setDatos(null);
      setCargando(false);
      setError(null);
      return;
    }

    const controlador = new AbortController();

    async function traerDatos() {
      try {
        setCargando(true);
        setError(null);
        setDatos(null);

        const respuesta = await fetch(url, {
          signal: controlador.signal
        });

        if (!respuesta.ok) {
          throw new Error("Error HTTP: " + respuesta.status);
        }

        const resultado = await respuesta.json();

        if (!controlador.signal.aborted) {
          setDatos(resultado);
        }
      } catch (e) {
        if (!controlador.signal.aborted) {
          setError(e.message);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    traerDatos();

    return () => {
      controlador.abort();
    };
  }, [url, repeticion]);

  return { datos, cargando, error };
}


