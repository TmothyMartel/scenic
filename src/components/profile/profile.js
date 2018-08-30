import React from "react";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FavLocations from "./fav-locations";
import "./css/profile.css";
export function Profile(props) {
	console.log(props.currentUser);
	return (
		<section className="container">
			<header>
				<img
					className="profile-img"
					src={props.currentUser.imageUrl}
					alt="profile"
				/>
				<h1>{props.currentUser.username}</h1>
				<button className="btn">Edit</button>
			</header>
			<article>
				<h2>about</h2>
				<p>{props.currentUser.about}</p>
			</article>
			<article>
				<h3>Favorite Locations</h3>
				<FavLocations />
				<h3>Added Locations</h3>
				<Link to="/create">
					<button className="btn">Add Location</button>
				</Link>
			</article>
		</section>
	);
}

const mapStateToProps = state => {
	// const { currentUser } = state.auth;
	return {
		currentUser: state.auth.currentUser
	};
};

export default requiresLogin()(connect(mapStateToProps)(Profile));
