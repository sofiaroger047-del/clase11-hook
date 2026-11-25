
# Clase 11 - React Hooks y Fetching Data

Proyecto realizado para la materia Programación Web.

Desarrollado utilizando React, Vite, JavaScript
y json-server.

## Clase 11 - Hooks de React

### Ejercicio 1: Reloj
Se creó un reloj que se actualiza cada segundo
utilizando useState y useEffect.

También se implementó un botón para mostrarlo
y ocultarlo, limpiando el intervalo al desmontarlo.

### Ejercicio 2: Clicks contra renders
Se utilizaron useState y useRef para contar
los clics y los renderizados de un componente.

### Ejercicio 3: Fichas favoritas
Se crearon fichas que permiten marcar favoritos.

Los datos se guardan en localStorage, por lo
que se conservan al recargar la página.

### Ejercicio 4: Hook personalizado
Se creó el hook useContadorGuardado para
reutilizar la lógica de dos contadores independientes.

### Ejercicio 5: Code Review
Se analizó un problema provocado por un
useEffect sin array de dependencias.

Se explicó cómo evitar las solicitudes repetidas
y los renderizados innecesarios.

## Anexo I - Fetching Data

### Ejercicio 1: Promesas y async/await
Se realizaron peticiones HTTP utilizando
.then() y async/await.

También se practicó el manejo de errores
mediante try/catch y respuesta.ok.

### Ejercicio 2: Perfil de GitHub
Se creó un componente que obtiene información
desde la API de GitHub.

Muestra el nombre, la foto y la cantidad
de repositorios públicos del usuario.

Se implementaron los estados de carga y error.

### Ejercicio 3: Buscador de Pokémon
Se desarrolló un buscador conectado a PokéAPI.

Permite buscar un Pokémon por su nombre
y mostrar su imagen y sus tipos.

También se manejan los errores de búsqueda.

### Ejercicio 4: Hook useFetch
Se creó un hook personalizado para reutilizar
la lógica de las peticiones HTTP.

El hook devuelve datos, cargando y error.

## Anexo II - Métodos HTTP y CRUD

Se utilizó json-server para simular una API
local y guardar información en db.json.

### Ejercicio 1: Métodos HTTP
Se practicaron los cuatro métodos:

- POST: crear tareas.
- PUT: reemplazar una tarea completa.
- PATCH: modificar parte de una tarea.
- DELETE: eliminar tareas.

### Ejercicio 2: Pruebas de errores
Se provocaron errores intencionalmente
para analizar las respuestas del servidor.

Resultados:

- POST sin JSON.stringify: HTTP 500.
- PUT incompleto: HTTP 200, pero se perdió
  el campo texto.
- DELETE con ID inexistente: HTTP 404.
- DELETE dos veces: la segunda vez dio 404.
- PATCH sin ID: HTTP 404.

Estas pruebas demostraron la importancia
de validar las respuestas del servidor.

### Ejercicio 3: Lista conectada - Camino A
Se desarrolló una aplicación de tareas en React.

Permite mostrar, agregar, completar y eliminar
tareas mediante peticiones HTTP.

Después de cada modificación, se realiza
un GET para actualizar la lista completa.

### Ejercicio 4: Camino B
Se modificó la aplicación para actualizar
directamente el estado de React.

Se utilizaron:

- Spread para agregar tareas.
- map() para modificar tareas.
- filter() para eliminar tareas.

También se agregó un botón Editar.

De esta manera, no es necesario realizar
otro GET después de cada modificación.

### Ejercicio 5: Code Review

Se identificaron cinco errores en un
componente llamado Notas.

**Error 1: POST dentro de useEffect**

Puede crear notas automáticamente sin
que el usuario lo solicite.

Solución: ejecutar el POST desde un evento,
como un clic en un botón.

**Error 2: Falta JSON.stringify**

El body contiene un objeto JavaScript
sin convertirlo a JSON.

Solución: utilizar JSON.stringify().

**Error 3: Uso de push()**

push() modifica directamente el array
del estado y puede impedir un nuevo render.

Solución: crear un array nuevo con spread.

**Error 4: respuesta.json() después de DELETE**

Algunos servidores responden 204 No Content.
Intentar leer JSON de una respuesta vacía
provoca un error.

Solución: no utilizar .json() si no es necesario.

**Error 5: No comprobar respuesta.ok**

El código no comprueba si las peticiones
HTTP fueron exitosas.

Solución: verificar respuesta.ok y manejar
los errores con try/catch.

## Cómo ejecutar el proyecto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar el servidor de datos

En una terminal:

```bash
npx json-server db.json
```

La API estará disponible normalmente en:

http://localhost:3000/tareas

### 3. Iniciar React

En otra terminal:

```bash
npm run dev
```

Abrir en el navegador la dirección indicada
por Vite, normalmente:

http://localhost:5173/

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- Node.js
- json-server
- Fetch API
- Git y GitHub

## Conclusión

Durante estos ejercicios aprendí a utilizar
hooks de React, consumir APIs, manejar errores
y realizar operaciones CRUD.

También comprendí la diferencia entre actualizar
una lista consultando nuevamente al servidor
(Camino A) y actualizar directamente el estado
de React (Camino B).


