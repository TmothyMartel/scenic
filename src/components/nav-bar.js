import React from "react";
import "./css/nav-bar.css";
import menu from "../images/menu.svg";
export default function NavBar(props) {
	return (
		<nav className="nav">
			<a href="/" className="logo">
				Scenic
			</a>
			<img className="menu" src={menu} alt="drop-down menu icon" />
		</nav>
	);
}
