import { Link } from "react-router-dom";
import "./Soda.css";

const Soda = () => {
	return (
		<div className="Soda">
			<div className="Soda-section">
				<p>Time for a caffiene boost!!</p>
				<Link className="Soda-link" to="/">
					GO BACK
				</Link>
			</div>
		</div>
	);
};

export default Soda;
