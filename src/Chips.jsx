import { Link } from "react-router-dom";
import "./Chips.css";

const Chips = () => {
	return (
		<div className="Chips">
			<div className="Chips-section">
				<p>YUM YUM YUM YUM</p>
				<Link className="Chips-link" to="/">
					GO BACK
				</Link>
			</div>
		</div>
	);
};

export default Chips;
