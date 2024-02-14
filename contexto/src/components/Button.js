import { useContext } from "react";
import UserContext from "../context/UserContext";
const Button = () => {
	const usuario = useContext(UserContext);
	console.log(usuario);

	return (
		<button className={usuario.isEminent ? "azul" : "rojo"}>
			Boton de prueba
		</button>
	);
};

export default Button;
