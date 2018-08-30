import React from "react";
import InfoBox from "../info-box";
import downArrow from "./images/down-arrow.svg";
import "./css/landing.css";

export default function Landing(props) {
	return (
		<div>
			<header className="hero">
				<h1 className="landing-title"> This is Scenic</h1>
				<h2 className="landing-subtitle">
					A photographers guide to NYC
				</h2>
				<img className="arrow" src={downArrow} alt="" />
			</header>
			<section>
				<InfoBox />
			</section>
		</div>
	);
}
