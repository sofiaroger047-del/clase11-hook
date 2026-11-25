
async function borrarTarea(id) {
  try {
    const respuesta = await fetch(
      `http://localhost:3000/tareas/${id}`,
      {
        method: "DELETE"
      }
    );

    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    console.log("Tarea eliminada correctamente.");
    console.log("ID eliminado:", id);

  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

const id = process.argv[2];

if (id) {
  borrarTarea(id);
} else {
  console.log("Debés indicar el ID de la tarea.");
}


