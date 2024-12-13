import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	const location = useLocation();

	const isActive = (path) => {
		return location.pathname === path;
	};

	return (
		<nav className="NavBar">
			<Link className={isActive("/") ? "NavBar-link active-link" : "NavBar-link"} to="/">
				Home
			</Link>
			<Link className={isActive("/candy") ? "NavBar-link active-link" : "NavBar-link"} to="/candy">
				Candy
			</Link>
			<Link className={isActive("/chips") ? "NavBar-link active-link" : "NavBar-link"} to="/chips">
				Chips
			</Link>
			<Link className={isActive("/soda") ? "NavBar-link active-link" : "NavBar-link"} to="/soda">
				Soda
			</Link>
		</nav>
	);
};

export default NavBar;
