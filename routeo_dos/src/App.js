import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Personajes from "./components/Personajes";
import Ubicaciones from "./components/Ubicaciones";
import Episodios from "./components/Episodios";
import NavBar from "./components/NavBar";
import DetallePersonaje from "./components/DetallePersonaje";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/personajes" element={<Personajes />} />
					<Route
						path="/personajes/:idPersonaje"
						element={<DetallePersonaje />}
					/>
					<Route path="/ubicaciones" element={<Ubicaciones />} />
					<Route path="/episodios" element={<Episodios />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
