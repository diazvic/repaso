import UserContext from "./context/UserContext";
import { useContext } from "react";
import { useState } from "react";
import Main from "./components/Main";
import "./App.css";

// desde app le paso por contexto a los demas elmentos
//como defino un estado global

// el context tiene un proveedor y un consumidor
// siempre que se define un contexto debo poner .provider con su value
//y encerrar los elementos a los cuales yo les quiero pasar la info

const App = () => {
	const [isEminent, setIsEminent] = useState(false);

	const handleChange = (e) => {
		setIsEminent(e.target.checked);
	};
	const usuario = {
		nombre: "Euge",
		apellido: "Diaz",
		edad: 25,
		isEminent: isEminent,
	};
	return (
		<div>
			<UserContext.Provider value={usuario}>
				<label>Convertirme en eminent</label>
				<input type="checkbox" checked={isEminent} onChange={handleChange} />
				<Main />
			</UserContext.Provider>
			Contexto
		</div>
	);
};

export default App;
