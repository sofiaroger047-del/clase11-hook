
async function probarPutIncompleto(id) {
  try {
    const respuesta = await fetch(
      `http://localhost:3000/tareas/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },

        // ERROR INTENCIONAL:
        // No estamos enviando el texto.
        body: JSON.stringify({
          hecha: true
        })
      }
    );

    console.log("Código HTTP:", respuesta.status);

    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    const tarea = await respuesta.json();

    console.log("Resultado:", tarea);

  } catch (error) {
    console.log("Error detectado:", error.message);
  }
}

const id = process.argv[2];

if (id) {
  probarPutIncompleto(id);
} else {
  console.log("Debés indicar el ID de la tarea.");
}


