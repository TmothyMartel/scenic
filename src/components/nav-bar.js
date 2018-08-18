import React from "react";
import "./css/nav-bar.css";
import DropMenu from "./dropmenu/drop-menu";

export default function NavBar(props) {
	return (
		<nav className="nav">
			<a href="/" className="logo">
				Scenic
			</a>
			<DropMenu />
		</nav>
	);
}
