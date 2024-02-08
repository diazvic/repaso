//Estado - Eventos
import "./App.css";
import { useState } from "react";

const App = () => {
	const [contador, setContador] = useState(0);
	const [color, setColor] = useState("rojo");
	const [valorDelInput, setValorDelInput] = useState("");
	const [valorDelCheckbox, setValorDelCheckbox] = useState("NO");
	const [valorDelPais, setValorDelPais] = useState("");
	const [valorDelAnimal, setValorDelAnimal] = useState("");
	const [mostrarModal, setMostrarModal] = useState("false");
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
	const handleChange = (e) => {
		console.log(e.target.value);
		setValorDelInput(e.target.value);
	};
	const handleChangeCheckbox = (e) => {
		e.target.checked ? setValorDelCheckbox("SI") : setValorDelCheckbox("NO");
	};
	const handleChangePais = (e) => {
		setValorDelPais(e.target.value);
	};
	const handleChangeAnimal = (e) => {
		setValorDelAnimal(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleClickMostrarModal = () => {
		setMostrarModal(false);
	};
	return (
		<div className={`container ${color}`}>
			{/* <p>Contador: {contador}</p>
			<button onClick={handleClickBotonMas}>+1</button>
			<button onClick={handleClickBotonMenos}>-1</button>
			<button onClick={handleClickCambiarColor}>Poner el fondo azul</button>
			<button onClick={handleClickCambiarColorARojo}>
				Poner el fondo rojo
			</button>
			<button onClick={handleClickCambiarColor}>{color}</button> */}
			<form onSubmit={handleSubmit}>
				<input type="text" name="nombre" onChange={handleChange} />
				<p>Valor del input: {valorDelInput}</p>
				<label>
					Terminos y condiciones
					<input type="checkbox" onChange={handleChangeCheckbox} />
				</label>
				<p>
					Acepta terminos y condiciones: <span>{valorDelCheckbox}</span>
				</p>
				<label>
					Pais
					<select onChange={handleChangePais}>
						<option value="argentina">Argentina</option>
						<option value="brasil">Brasil</option>
						<option value="chile">Chile</option>
					</select>
				</label>
				<p>
					Pais elegido: <span>{valorDelPais}</span>
				</p>
				<label>
					<input
						type="radio"
						name="animal"
						value="gato"
						onChange={handleChangeAnimal}
					/>
					Gato
					<input
						type="radio"
						name="animal"
						value="perro"
						onChange={handleChangeAnimal}
					/>
					Perro
				</label>
				<p>
					Animal elegido: <span>{valorDelAnimal}</span>
				</p>
				<button>Enviar</button>
			</form>
			{mostrarModal && (
				<div>
					<p>MODAL</p>
					<div>
						<button onClick={handleClickMostrarModal}>Cerrar Modal</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
