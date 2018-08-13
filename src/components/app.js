import React from "react";

import NavBar from "./nav-bar";
import Landing from "./landing";

export default function App(props) {
	return (
		<div>
			<NavBar />
			<main role="main">
				<Landing />
			</main>
		</div>
	);
}
