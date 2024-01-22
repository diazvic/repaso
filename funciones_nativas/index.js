// const nombre = "Java";

// nombre.length;

// console.log(nombre.length);

// const nombreMayus = nombre.toUpperCase();
// console.log(nombreMayus);

// console.log(nombre.charAt(0));
// console.log(nombre.charAt(3));

// console.log(nombre.slice(1, 4));

// const frase = "Aguante Capu";

// console.log(frase.replace("C", "J"));

// const fraseNueva = "Hola estoy probando";
// // /a/ expresion regular
// console.log(fraseNueva.replace(/a/gi, "i"));
// /[ae]/;

//Defini una funcion sonIguales que reciba como argumentos
//dos strings a y b y retorne si ambos strings
//tienen el mismo contenido independientes del caso

const sonIguales = (a, b) => {
	if (a.toUpperCase() === b.toUpperCase()) {
		return true;
	} else {
		return false;
	}
};
console.log(sonIguales("hola", "no"));
console.log(sonIguales("hola", "hola"));
console.log(sonIguales("Hola", "HOLA"));
