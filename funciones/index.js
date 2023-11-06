// console.log("hola");

// let funcionPrueba = () => {
// 	alert("Hola");
// };
// funcionPrueba();

// const gatosPrueba = (gatos) => {
// 	console.log(`Hola ${gatos}`);
// };
// gatosPrueba("Java");
// gatosPrueba("Capu");

//funcion suma
// const sumar = (numero1, numero2) => {
// 	let suma = numero1 + numero2;
// 	return suma;
// };

// let resultado = sumar(2, 7);

// console.log(resultado);
// sumar(2, 6);
// sumar(3, 3);

//Defini una funcion gritar q reciba como argumento un string y devuelva el mismo string con un signo de exclamacion al principio y al final del mismo
// let gritar = (saludo) => {
// 	return `¡${saludo}!`;
// };

// console.log(gritar("Hola"));
// console.log(gritar("Prueba"));

//Defini una funcion obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la union de ambos valores
let obtenerNombreCompleto = (nombre, apellido) => {
	return `${nombre} ${apellido}`;
};
console.log(obtenerNombreCompleto("Victoria", "Diaz"));
console.log(obtenerNombreCompleto("Euge", "Diaz"));
