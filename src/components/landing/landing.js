import React from "react";
import InfoBox from "../info-box";
import downArrow from "./images/down-arrow.svg";
import "./css/landing.css";

export default function Landing(props) {
	return (
		<div>
			<header className="hero">
				<h1 className="landing-title"> Scenic landing </h1>
				<img className="arrow" src={downArrow} />
			</header>
			<section>
				<InfoBox />
			</section>
		</div>
	);
}
