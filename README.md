
# Clase 11 - Hooks de React

Proyecto desarrollado con React y Vite para la materia
Programación Web.

## Ejercicios

### Ejercicio 1 - Reloj que se apaga
Reloj que se actualiza cada segundo utilizando
useState y useEffect.

Incluye un botón para mostrarlo y ocultarlo.
Al desmontar el componente, se limpia el intervalo.

### Ejercicio 2 - Clicks contra renders
Contador de clics y renderizados utilizando
useState y useRef.

### Ejercicio 3 - Fichas favoritas
Fichas que permiten marcar favoritos y guardar
su estado en localStorage.

### Ejercicio 4 - Hook personalizado
Dos contadores independientes que utilizan
el hook useContadorGuardado.

## Ejercicio 5 - Code Review

### 1. ¿Qué está pasando paso a paso?

El useEffect se ejecuta después de cada renderizado.
Cuando llegan los datos del servidor, setDatos
actualiza el estado y provoca otro renderizado.

Esto vuelve a ejecutar el efecto y genera un ciclo
de peticiones y actualizaciones.

### 2. ¿Por qué se congela la pestaña?

Porque se realizan solicitudes y actualizaciones
repetidamente, consumiendo recursos del navegador.

### 3. ¿Qué array de dependencias necesita?

Si queremos cargar los datos solamente cuando
se monta el componente, utilizamos [].

Si la petición depende de una variable, debemos
incluirla en el array de dependencias.

### 4. ¿Cómo mantener los datos actualizados?

Podemos agregar un botón para actualizar,
volver a solicitar los datos cuando cambie
una dependencia o utilizar un intervalo controlado.

No debemos quitar el array de dependencias
para forzar actualizaciones constantes.

## Ejecución

Instalar dependencias:

    npm install

Iniciar el servidor:

    npm run dev


