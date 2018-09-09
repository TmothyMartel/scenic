import React from "react";
//import "./css/footer-bar.css";

export default function Footer(props) {
	const style = {
		backgroundColor: "#353535",
		height: "45px",
		textAlign: "center",

		width: "100%"
	};

	const copyrightStyle = {
		padding: "12px",
		margin: "0"
	};
	return (
		<footer role="contentinfo" style={style}>
			<p style={copyrightStyle}>&copy;- Timothy Martel - 2018</p>
		</footer>
	);
}
