import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./VendingMachine";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<VendingMachine />} />
					<Route path="/candy" element={<Candy />} />
					<Route path="/chips" element={<Chips />} />
					<Route path="/soda" element={<Soda />} />
					<Route path="*" element={<div>Page Not Found</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
