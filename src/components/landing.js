import React from "react";
import InfoBox from './info-box'
import "./css/landing.css";
export default function Landing(props) {
	return (
        <div>
		<header className="hero">
			<h1 className="landing-title"> Scenic landing </h1>
		</header>
        <section>
            <InfoBox />
        </section>
        </div>
	);
}
