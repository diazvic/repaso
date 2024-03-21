// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../App.css";

// const DetallePersonaje = () => {
// 	const params = useParams();
// 	const [personaje, setPersonaje] = useState([]);

// 	useEffect(() => {
// 		fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
// 			.then((res) => res.json())
// 			.then((data) => setPersonaje(data));
// 	}, [params.idPersonaje]);
// 	return (
// 		<div>
// 			<h1>Detalle Personaje</h1>
// 			<article className="card-personajes">
// 				<h2>Nombre: {personaje.name}</h2>
// 				<h3>Status: {personaje.status}</h3>
// 				<img src={personaje.image} alt={personaje.name} />
// 			</article>
// 		</div>
// 	);
// };

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const DetallePersonaje = () => {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [personaje, setPersonaje] = useState(null);

	useEffect(() => {
		setIsLoading(true); // Iniciar el estado de carga
		setError(null); // Limpiar cualquier error previo

		fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Error al cargar los datos del personaje");
				}
				return res.json();
			})
			.then((data) => {
				setPersonaje(data);
				setIsLoading(false); // Finalizar el estado de carga
			})
			.catch((error) => {
				setError(error.message); // Capturar y manejar errores
				setIsLoading(false); // Finalizar el estado de carga
			});
	}, [params.idPersonaje]);

	if (isLoading) {
		return <p>Cargando...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (!personaje) {
		return <p>No se encontró el personaje</p>;
	}

	return (
		<div>
			<h1>Detalle Personaje</h1>
			<article className="card-personajes">
				<h2>Nombre: {personaje.name}</h2>
				<h3>Status: {personaje.status}</h3>
				<img src={personaje.image} alt={personaje.name} />
			</article>
		</div>
	);
};

export default DetallePersonaje;
