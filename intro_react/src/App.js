// JSX es una mezcla de js y HTML. Me permite usar funciones q retornan HTML
//pero con todas las funcionalidades de JS (variables, condicionales,etc)
import "./App.css";
import Card from "./Card";
const App = () => {
	const nombre = "Java";
	return (
		<div className="contenedor">
			<h1>Hola {nombre}</h1>
			<Card />
		</div>
	);
};

export default App;
