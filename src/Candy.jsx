import { Link } from "react-router-dom";
import "./Candy.css";

const Candy = () => {
	return (
		<div className="Candy">
			<div className="Candy-section">
				<p>Great Choice! Watch out for the sugar high!</p>
				<Link className="Candy-link" to="/">
					GO BACK
				</Link>
			</div>
		</div>
	);
};

export default Candy;
