import React from "react";
import "./css/nav-bar.css";

export default function NavBar(props) {
	return (
		<nav className="nav">
			<a href="/" className="logo">
				Scenic
			</a>
			<ul className="nav-links">
				<li className="link">Sign Up</li>
				<li className="link">Login</li>
			</ul>
		</nav>
	);
}
