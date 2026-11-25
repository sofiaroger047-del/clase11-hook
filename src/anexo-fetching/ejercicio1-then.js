
console.log("Voy a pedir los usuarios...");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    return respuesta.json();
  })
  .then((usuarios) => {
    usuarios.forEach((usuario) => {
      console.log(usuario.name);
    });
  })
  .catch((error) => {
    console.log("Ocurrió un error:", error.message);
  });

console.log("Este mensaje aparece antes que los nombres.");

