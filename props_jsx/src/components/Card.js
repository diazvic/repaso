import "../styles/Card.css";
const Card = (props) => {
	console.log(props.numero);
	console.log(props.array[0]);

	return (
		<article className="card">
			<h2>{props.nombre}</h2>
			<p>{props.numero}</p>
			<img src="https://picsum.photos/200/200" />
		</article>
	);
};

export default Card;

// los parametros que se pasan son objetos
