import "./App.scss";
import Card from "./components/Card";

// Crear un nuevo proyecto de React
// En App.js, copiar el array.
// Por cada uno de los elementos del array, mostrar un componente <Card> que muestre las propiedades: title, type, price e img.
// Estilar las tarjetas con scss, declarando un archivo llamado Card.scss, siguiendo el estilado sugerido o como más te guste.
// Agregar dos props a cada componente Card: isAvailable y onSale.
// Si isAvailable es false, el fondo de la tarjeta debe mostrarse en gris. (O cualquier otro estilado que prefieras, por ejemplo, la imagen puede tener un overlay gris, el titulo puede estar tachado, etc).
// Si onSale es true, al lado del titulo debe aparecer un span que diga "ON SALE!
const products = [
	{
		title: "Coombes",
		type: "Lounge",
		price: 2600,
		rating: 4,
		img: "https://i.imgur.com/ZAxMGG5.png",
		isAvailable: true,
		onSale: false,
	},
	{
		title: "Keeve Set",
		type: "Table & Chairs",
		price: 590,
		rating: 4,
		img: "https://i.imgur.com/tT8sFIs.jpeg",
		isAvailable: false,
		onSale: false,
	},
	{
		title: "Nillè",
		type: "Armchair",
		price: 950,
		rating: 5,
		img: "https://i.imgur.com/Vx1cZY0.png",
		isAvailable: false,
		onSale: true,
	},
	{
		title: "Blanko",
		type: "Side table",
		price: 90,
		rating: 4,
		img: "https://i.imgur.com/N1Bf4ox.jpg",
		isAvailable: true,
		onSale: false,
	},
	{
		title: "Momo",
		type: "Shelves",
		price: 890,
		rating: 4,
		img: "https://i.imgur.com/AlKxDE4.jpeg",
		isAvailable: true,
		onSale: false,
	},
	{
		title: "Penemillè",
		type: "Chair",
		price: 120,
		rating: 4,
		img: "https://i.imgur.com/pmANPjN.jpeg",
		isAvailable: true,
		onSale: false,
	},
	{
		title: "Kappu",
		type: "Shelves",
		price: 420,
		rating: 4,
		img: "https://i.imgur.com/s2rsPa1.jpg",
		isAvailable: true,
		onSale: false,
	},
];
const App = () => {
	return (
		<div>
			<h1>Ejercicio</h1>
			{products.map((product) => (
				<div key={product.title}>
					<Card
						title={product.title}
						type={product.type}
						price={product.price}
						img={product.img}
						isAvailable={product.isAvailable}
						onSale={product.onSale}
					/>
				</div>
			))}
		</div>
	);
};

export default App;
