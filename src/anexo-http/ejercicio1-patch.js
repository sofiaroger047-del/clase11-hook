

async function completarTarea(id) {
  try {
    const respuesta = await fetch(
      `http://localhost:3000/tareas/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hecha: true
        })
      }
    );


    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }


    const tareaActualizada = await respuesta.json();


    console.log("Tarea actualizada:", tareaActualizada);


  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}


const id = process.argv[2];


if (id) {
  completarTarea(id);
} else {
  console.log("Debés indicar el ID de la tarea.");
}


