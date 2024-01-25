import "../styles/Button.css";
const Button = (props) => {
	return <button className={props.color}>{props.mensaje}</button>;
};

export default Button;
