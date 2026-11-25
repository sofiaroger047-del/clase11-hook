
async function probarPatchSinId() {
  try {
    const respuesta = await fetch(
      "http://localhost:3000/tareas",
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

    console.log("Código HTTP:", respuesta.status);

    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    console.log("Solicitud aceptada.");

  } catch (error) {
    console.log("Error detectado:", error.message);
  }
}

probarPatchSinId();


