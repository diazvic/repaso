//la sintaxis del map: nombredelarray.nombredelmetodo(funcionaEjecutar)
//recorre un array, por cada elmento del array ejecuta la funcion que pasamos como
//parametro
//retorna un nuevo array con todos los retornos de la funcion parametro

const personajes = ["Minnie", "Mickey", "Goofy", "Pato Lucas"];

const nuevoArray = personajes.map((personaje) => {
	//la funcion que se va a ejecutar por cada elemento del array
	console.log(personaje);
	return personaje.toUpperCase();
});
console.log(nuevoArray);

// ejercicio 1
// const numeros = [1, 2, 3, 4, 5];

// let numerosMasDiez = numeros.map((numero) => {
// 	return numero + 10;
// });

// // codear acá la solución del ejercicio

// console.log(numeros); // [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

// ejercicio 2
// const numeros = [3, 7, 13, 99];

// // codear acá la solución del ejercicio
// const dobles = numeros.map((numero) => {
// 	return numero * 2;
// });

// console.log(numeros); // [3, 7, 13, 99]
// console.log(dobles); // [6, 14, 26, 198]

// ejercicio 3
// const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// // codear acá la solución del ejercicio

// const frasesExclamadas = frases.map((frase) => {
// 	return `¡${frase}!`;
// });

//console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
//console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

// ejercicio 4
// const librosDeJS = [
// 	"JavaScript for Kids: A Playful Introduction to Programming",
// 	"Composing Software",
// 	"Eloquent JavaScript: A Modern Introduction to Programming",
// 	"JavaScript: The Good Parts",
// 	"Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
// 	"Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
// 	"JavaScript: The Definitive Guide",
// 	"You Don’t Know JS",
// 	"JavaScript Allongé: The Six Edition",
// ];

// codear acá la solución del ejercicio
// const listaLibros = librosDeJS.map((libros) => {
// 	return `<li>${libros}</li>`;
// });
// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

// console.log(listaLibros);

// const listaLibrosNueva = `<ul>${listaLibros.join("")}</ul>`;

// console.log(listaLibrosNueva);

// ejercicio 5
// const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio

// const longitudes = frases.map((frase) => {
// 	return frase.length;
// });

//console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
//console.log(longitudes); // [ 17, 18, 16 ]

// ejercicio 6
// const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

/// completá acá el código

// const lista = playlist.map((list, index) => {
// 	return `${index} - ${list}`;
// });

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
// console.log(lista);

// filter
// a partir de un array, me quedo con ALGUNOS elementos

// ejercicio 1
// const costos = [
// 	39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14,
// ];
// codear acá la solución del ejercicio

// const losMasCaros = costos.filter((costo) => {
// 	return costo > 50;
// });
// console.log(costos);
// console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

// ejercicio 2
// const masNumeros = [
// 	43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32,
// ];

// codea acá tu solución
// const numerosPares = masNumeros.filter((numeros) => {
// 	return numeros % 2 === 0;
// });
// const numerosImpares = masNumeros.filter((numeros) => {
// 	return numeros % 2 != 0;
// });

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//ejercicio 3
const playlist = [
	"Smells Like Teen Spirit",
	"Everlong",
	"Come As You Are",
	"The Pretender",
	"Heart-Shaped Box",
	"Learn to Fly",
	"Lithium",
];
var playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

/// codea aca tu solución

const playlistSinEscuchar = playlist.filter((cancion) => {
	return !playlistEscuchada.includes(cancion);
});
console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
