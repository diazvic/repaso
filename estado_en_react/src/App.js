//Estado - Eventos
import "./App.css";
import { useState } from "react";

const App = () => {
	const [contador, setContador] = useState(0);
	const [color, setColor] = useState("rojo");

	const handleClickBotonMas = () => {
		console.log("click");
		setContador(contador + 1);
	};

	const handleClickBotonMenos = () => {
		console.log("click");
		setContador(contador - 1);
	};
	// const handleClickCambiarColor = () => {
	// 	setColor("azul");
	// };

	const handleClickCambiarColorARojo = () => {
		setColor("rojo");
	};

	const handleClickCambiarColor = () => {
		setColor(color === "rojo" ? "azul" : "rojo");
	};
	return (
		<div className={`container ${color}`}>
			<p>Contador: {contador}</p>
			<button onClick={handleClickBotonMas}>+1</button>
			<button onClick={handleClickBotonMenos}>-1</button>
			<button onClick={handleClickCambiarColor}>Poner el fondo azul</button>
			<button onClick={handleClickCambiarColorARojo}>
				Poner el fondo rojo
			</button>
			<button onClick={handleClickCambiarColor}>{color}</button>
		</div>
	);
};

export default App;
