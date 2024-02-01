import "../styles/Card.scss";
const Card = ({ title }) => {
	console.log(title);
	return (
		<article className="tarjeta">
			<span>{title}</span>
		</article>
	);
};

export default Card;
