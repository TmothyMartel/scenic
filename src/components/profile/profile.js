import React from "react";
import defaultImage from "./images/user.svg";
import AddLocations from "./add-locations";
import FavLocations from "./fav-locations";
import "./css/profile.css";
export default function Profile(props) {
	return (
		<section className="container" role="region">
			<header>
				<img
					className="profile-img"
					src={defaultImage}
					alt="profile image"
				/>
				<h1>User1234</h1>
			</header>
			<article>
				<h2>about</h2>
				<p>lorem ipsum</p>
			</article>
			<article>
				<h3>Favorite Locations</h3>
				<FavLocations />
				<h3>Added Locations</h3>
				<AddLocations />
			</article>
		</section>
	);
}
