
async function traerUsuarios() {
  try {
    const respuesta = await fetch(
      // "https://jsonplaceholder.typicode.com/usersxxxx" // incorrecto
      "https://jsonplaceholder.typicode.com/users" // correcto
    );

    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    const usuarios = await respuesta.json();

    usuarios.forEach((usuario) => {
      console.log(usuario.name);
    });

  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

console.log("Voy a pedir los usuarios...");

traerUsuarios();

console.log("Este mensaje aparece antes que los nombres.");

