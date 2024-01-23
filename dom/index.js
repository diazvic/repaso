// var miElemento = document.getElementById("miTitulo");
// miElemento.innerHTML = "Hola, DOM";
// console.log("hola");

// const nombre = prompt("Indique su nombre");
// const titulo = document.querySelector(".verde");
// titulo.textContent = `Hola ${nombre}, bienvenida a Dom`;

// const parrafo = document.getElementById("primer-parrafo");

// parrafo.classList.add("subrayado");
// parrafo.classList.add("rojo");
// parrafo.classList.remove("rojo");

// const color = prompt("Elija un color: rojo,azul,verde");
// const titulo = document.querySelector("h1");

// if (color === "rojo") {
// 	titulo.classList.add("rojo");
// }

// titulo.classList.add(color); //esto sirve para no hacer tantos if else

// const parrafo = document.querySelector("#primer-parrafo");
// parrafo.style.color = "purple";

// mas ejercicios

// Ejercicio 1: Cambiar el Texto de un Elemento

const mensaje = document.getElementById("mensaje");
mensaje.textContent = "¡Hola, DOM!";

// Ejercicio 2: Cambiar el Color de Fondo
const color = document.getElementById("miDiv");
color.style.backgroundColor = "green";

// Ejercicio 3: Agregar y Eliminar Clases
const cambiarEstilo = () => {
	const miBoton = document.getElementById("miBoton");
	miBoton.classList.toggle("resaltado");
};

// Define una función llamada cambiarEstilo() que se ejecutará al hacer clic en el botón.
// Dentro de la función, usa el DOM para seleccionar el botón por su id.
// Agrega la clase "resaltado" al botón si no la tiene, y elimínala si ya la tiene.

// Ejercicio 4: Crear y Agregar Elementos
let elementosLista = ["Naranja", "Manzana", "Pera"];
const lista = document.getElementById("miLista");
miLista.innerHTML = elementosLista
	.map((elemento) => `<li>${elemento}</li>`)
	.join("");

// ejercicio 5
//   Usa el DOM para seleccionar el botón con el id "botonEvento".
// Agrega un evento de clic al botón que, al hacer clic,
//  cambie el contenido del elemento con el id "mensajeEvento"
//   a un mensaje de tu elección.

const botonEvento = document.getElementById("botonEvento");

botonEvento.addEventListener("click", function () {
	const mensajeEvento = document.getElementById("mensajeEvento");
	mensajeEvento.textContent = "Mensaje cuando hago click";
});
