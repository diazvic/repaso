import "../styles/Card.scss";
const Card = ({ title, type, price, img, isAvailable, onSale }) => {
	return (
		<article className={`tarjeta ${isAvailable ? "true" : "false"}`}>
			<img src={img} />
			<span>{title}</span>
			<span>{onSale ? " ON SALE!" : ""}</span>
			<span className="type">{type}</span>
			<p>${price}</p>
		</article>
	);
};

export default Card;
