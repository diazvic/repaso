import Button from "./Button";
const Main = ({ titulo, subtitulo }) => {
	// console.log(props);
	return (
		<main>
			<section>
				<h1>{titulo}</h1>
				<h4>{subtitulo}</h4>
				<img src="https://picsum.photos/200/300" />
				<Button mensaje="Primera" />
			</section>
		</main>
	);
};

export default Main;
