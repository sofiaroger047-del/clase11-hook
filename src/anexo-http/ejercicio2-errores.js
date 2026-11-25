
async function probarPostIncorrecto() {
  try {
    const respuesta = await fetch(
      "http://localhost:3000/tareas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        // ERROR INTENCIONAL:
        // Falta JSON.stringify()
        body: {
          texto: "Tarea mal enviada",
          hecha: false
        }
      }
    );

    console.log("Código HTTP:", respuesta.status);

    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    console.log("El servidor aceptó la solicitud.");

  } catch (error) {
    console.log("Error detectado:", error.message);
  }
}

probarPostIncorrecto();


