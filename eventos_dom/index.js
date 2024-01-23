// const boton = document.getElementById("haceme-click");
// const imagen = document.querySelector("img");
// const saludar = () => {
// 	console.log("hola");
// 	imagen.src = "http://placekitten.com/200/300";
// };

// boton.onclick = saludar;

const corazon = document.getElementById("corazon");
const gatito = document.getElementById("imagen");
const cantidadLikes = document.getElementById("cantidad-de-likes");
// const convertirARojo = () => {
// 	if (corazon.style.color === "red") {
// 		corazon.style.color = "#0000";
// 	} else {
// 		corazon.style.color = "red";
// 	}
// };
// gatito.onclick = convertirARojo;

const convertirRojo = () => {
	corazon.classList.toggle("rojo");
	// cantidadLikes.textContent = "1";
};

gatito.onclick = convertirRojo;

const modal = document.getElementById("modal");
const abrirModal = document.getElementById("abrir-modal");
const cerrarModal = document.getElementById("cerrar-modal");

const mostrarModal = () => {
	modal.style.display = "block";
};

abrirModal.onclick = mostrarModal;

const ocultarModal = () => {
	modal.style.display = "none";
};

cerrarModal.onclick = ocultarModal;

const main = document.getElementById("main");
const botonModoOscuro = document.getElementById("modo-oscuro");
const cambiarModoOscuro = () => {
	main.classList.toggle("modo-oscuro");
};

botonModoOscuro.onclick = cambiarModoOscuro;
