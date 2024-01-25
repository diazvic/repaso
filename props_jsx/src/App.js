import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
const App = () => {
	return (
		<div className="container">
			<h2>Props</h2>
			<Nav />
			<Main />
			<Button mensaje="Java" color="verde" />
			<Button mensaje="Capu" color="azul" />
			<Button mensaje="Teckel" color="rojo" />
			<Footer />
		</div>
	);
};

export default App;
