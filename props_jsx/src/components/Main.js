import "../styles/Main.css";
import Card from "./Card";
const Main = () => {
	return (
		<main className="main">
			<h1>React</h1>
			<div className="tarjetas">
				<Card nombre="paisaje" numero="5" array={[1, 2, 3]} />
				{/* <Card nombre="foto" />
				<Card nombre="foto 2" /> */}
			</div>
		</main>
	);
};

export default Main;
