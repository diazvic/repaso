//Estado - Eventos

import { useState } from "react";

const App = () => {
	const [contador, setContador] = useState(0);

	const handleClickBotonMas = () => {
		console.log("click");
		setContador(contador + 1);
	};

	const handleClickBotonMenos = () => {
		console.log("click");
		setContador(contador - 1);
	};
	return (
		<div>
			<p>Contador: {contador}</p>
			<button onClick={handleClickBotonMas}>+1</button>
			<button onClick={handleClickBotonMenos}>-1</button>
		</div>
	);
};

export default App;
