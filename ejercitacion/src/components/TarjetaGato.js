import "../styles/TarjetaGato.scss";
const TarjetaGato = ({ nombre, descripcion, imagen }) => {
	return (
		<article className="tarjeta-gato">
			<h1>{nombre}</h1>
			<p>{descripcion}</p>
			<img src={imagen} />
		</article>
	);
};

export default TarjetaGato;
