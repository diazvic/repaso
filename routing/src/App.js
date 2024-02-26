import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Nav from "./components/Nav";
import Contacto from "./components/Contacto";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<div>
			Routing
			<BrowserRouter>
				{/* aca podria ir el nav */}
				<Nav>
					<Link to="/">Home</Link>
					<Link to="/blog">Blog</Link>
				</Nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contacto" element={<Contacto />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
