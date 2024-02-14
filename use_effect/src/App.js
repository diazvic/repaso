import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
	const [personajes, setPersonajes] = useState([]);
	const [busqueda, setBusqueda] = useState("");
	const [valorDelInput, setValorDelInput] = useState("");

	console.log(personajes);
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
			.then((res) => res.json())
			.then((data) => setPersonajes(data.results));
	}, [busqueda]);
	const handleClickPersonajes = () => {
		setBusqueda("character");
	};
	// const handleChange = (e) => {
	// 	setValorDelInput(e.target.value);
	// };
	const handleClick = () => {
		setBusqueda(valorDelInput);
	};
	return (
		<div>
			<div className="personajes-container">
				<button onClick={handleClickPersonajes}>Buscar personajes</button>
				<input type="text" />
				<button onClick={handleClick}>Buscar</button>

				{personajes.map((personaje) => (
					<Card
						key={personaje.name}
						title={personaje.name}
						img={personaje.image}
					/>
					//  <h3 key={personaje.name}>{personaje.name}</h3>
				))}
			</div>
		</div>
	);
};

export default App;
