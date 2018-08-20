import React from "react";
import { Link } from "react-router-dom";
import "./css/nav-bar.css";
import DropMenu from "./dropmenu/drop-menu";

export default function NavBar(props) {
	return (
		<nav className="nav">
			<Link to="/" className="logo">
				Scenic
			</Link>
			<DropMenu />
		</nav>
	);
}
