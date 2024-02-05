import BotonGato from "./components/BotonGato.js";
import TarjetaGato from "./components/TarjetaGato.js";

const nombresGatos = [
	"Rodolfo",
	"Muzzarela",
	"Artilugia",
	"Wosito",
	"Calamardo",
];
const gatos = [
	{
		name: "Rodolfo",
		shortDesc:
			"Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: "https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg",
		colores: ["tricolor", "negro", "blanco", "naranja", "rayado"],
		sexo: "m",
	},

	{
		name: "Muzzarella",
		shortDesc:
			"Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: "https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg",
		colores: ["gris"],
		sexo: "f",
	},

	{
		name: "Artilugia",
		shortDesc:
			"Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: "https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg",
		colores: ["negro", "blanco"],
		sexo: "f",
	},

	{
		name: "Wosito",
		shortDesc:
			"Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s",
		colores: ["rayado"],
		sexo: "m",
	},

	{
		name: "Calamardo",
		shortDesc:
			"Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: "https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg",
		colores: ["negro"],
		sexo: "m",
	},
];
const App = () => {
	return (
		<div className="caja">
			{/* {nombresGatos.map((gato) => (
				<p key={gato}>
					<BotonGato contenido={gato} />
				</p>
			))}
			{gatos.map((gatito) => (
				<article key={gatito.name}>
					<BotonGato contenido={gatito.name} />
				</article>
			))} */}
			{gatos.map((gatito) => (
				<TarjetaGato
					key={gatito.name}
					nombre={gatito.name}
					descripcion={gatito.shortDesc}
					imagen={gatito.img}
				/>
			))}
		</div>
	);
};

export default App;
