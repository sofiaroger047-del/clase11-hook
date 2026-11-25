
async function crearTarea(texto) {
  try {
    const respuesta = await fetch(
      "http://localhost:3000/tareas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          texto: texto,
          hecha: false
        })
      }
    );

    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    const nuevaTarea = await respuesta.json();

    console.log("Tarea creada:", nuevaTarea);
    console.log("ID asignado:", nuevaTarea.id);

  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

const texto = process.argv[2];

if (texto) {
  crearTarea(texto);
} else {
  console.log("Tenés que escribir una tarea.");
}


