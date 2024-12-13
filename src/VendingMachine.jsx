import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<p className="VendingMachine-intro">HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT? </p>
			<nav className="VendingMachine-navbar">
				<Link className="VendingMachine-link" to="/candy">
					CANDY
				</Link>
				<Link className="VendingMachine-link" to="/chips">
					CHIPS
				</Link>
				<Link className="VendingMachine-link" to="/soda">
					SODA
				</Link>
			</nav>
		</div>
	);
};

export default VendingMachine;
