import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Personajes = () => {
	const [personajes, setPersonajes] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((res) => res.json())
			.then((data) => setPersonajes(data.results));
	}, []);
	return (
		<div>
			<h3>Personajes</h3>
			<div className="container-personajes">
				{personajes.map((personaje) => {
					return (
						<Link to={`personajes/${personaje.id}`}>
							<div key={personaje.id} className="card-personajes">
								<h2>{personaje.name}</h2>
								<img src={personaje.image} alt={personaje.name} />
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Personajes;
