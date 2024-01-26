import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";
const App = () => {
	return (
		<div>
			<Nav />
			<Main
				titulo="Seccion Uno"
				subtitulo="Prueba de subtitulo 1"
				imagen="https://picsum.photos/200/300"
			/>
			<Main
				titulo="Seccion Dos"
				subtitulo="Prueba de subtitulo 2"
				imagen="https://picsum.photos/200/300"
			/>
		</div>
	);
};

export default App;
