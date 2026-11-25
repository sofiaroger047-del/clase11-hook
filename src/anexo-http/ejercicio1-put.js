
async function modificarTarea(id) {
  try {
    const respuesta = await fetch(
      `http://localhost:3000/tareas/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          texto: "Repasar para el examen de Programación Web",
          hecha: false
        })
      }
    );

    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    const tareaModificada = await respuesta.json();

    console.log("Tarea modificada:", tareaModificada);

  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

const id = process.argv[2];

if (id) {
  modificarTarea(id);
} else {
  console.log("Debés indicar el ID de la tarea.");
}

