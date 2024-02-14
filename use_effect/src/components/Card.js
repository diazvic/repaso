import "../App.css";
const Card = ({ title, img }) => {
	return (
		<article className="tarjeta">
			<p>{title}</p>
			<img src={img} />
		</article>
	);
};

export default Card;
