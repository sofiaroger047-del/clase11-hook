
import { useState, useEffect, useCallback } from "react";

const URL = "http://localhost:3000/tareas";

export default function ListaTareasA() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [modificandoId, setModificandoId] = useState(null);
  const [error, setError] = useState(null);
  const [borrandoId, setBorrandoId] = useState(null);

  // GET: obtener todas las tareas
  const cargarTareas = useCallback(async () => {
    try {
      setCargando(true);
      setError(null);

      const respuesta = await fetch(URL);

      if (!respuesta.ok) {
        throw new Error("Error HTTP: " + respuesta.status);
      }

      const datos = await respuesta.json();
      setTareas(datos);

    } catch (e) {
      setError(e.message);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarTareas();
  }, [cargarTareas]);

  // POST: agregar una tarea
  async function agregarTarea(evento) {
    evento.preventDefault();

    if (!texto.trim() || guardando) return;

    try {
      setGuardando(true);
      setError(null);

      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          texto: texto.trim(),
          hecha: false
        })
      });

      if (!respuesta.ok) {
        throw new Error("Error HTTP: " + respuesta.status);
      }

      setTexto("");
      await cargarTareas();

    } catch (e) {
      setError(e.message);
    } finally {
      setGuardando(false);
    }
  }

  // PATCH: cambiar el estado de una tarea
  async function alternarTarea(tarea) {
    if (modificandoId !== null) return;

    try {
      setModificandoId(tarea.id);
      setError(null);

      const respuesta = await fetch(
        `${URL}/${tarea.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            hecha: !tarea.hecha
          })
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error HTTP: " + respuesta.status);
      }

      // Camino A: volver a pedir toda la lista
      await cargarTareas();

    } catch (e) {
      setError(e.message);
    } finally {
      setModificandoId(null);
    }
  }
  
  // DELETE: eliminar una tarea
  async function borrarTarea(id) {
    if (borrandoId !== null) return;

    try {
      setBorrandoId(id);
      setError(null);

      const respuesta = await fetch(
        `${URL}/${id}`,
        {
          method: "DELETE"
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error HTTP: " + respuesta.status);
      }

      // Camino A: volver a pedir toda la lista
      await cargarTareas();

    } catch (e) {
      setError(e.message);
    } finally {
      setBorrandoId(null);
    }
  }

  return (
    <div>
      <h2>Mis tareas - Camino A</h2>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Escribí una tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button type="submit" disabled={guardando}>
          {guardando ? "Guardando..." : "Agregar"}
        </button>
      </form>

      {cargando && <p>Cargando tareas...</p>}

      {error && <p>Error: {error}</p>}

      {!cargando && (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              {tarea.hecha ? "✅" : "⬜"}
              {" "}
              {tarea.texto || "(Sin texto)"}
              {" "}

              <button
                onClick={() => alternarTarea(tarea)}
                disabled={modificandoId !== null || borrandoId !== null}
              >
                {modificandoId === tarea.id
                  ? "Guardando..."
                  : tarea.hecha
                    ? "Desmarcar"
                    : "Completar"}
              </button>

              <button
                onClick={() => borrarTarea(tarea.id)}
                disabled={borrandoId !== null || modificandoId !== null}
              >
                {borrandoId === tarea.id
                    ? "Borrando..."
                    : "Eliminar"}
              </button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


