import React from "react";
import defaultImage from "./images/user.svg";
import requiresLogin from '../requires-login';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import AddLocations from "./add-locations";
import FavLocations from "./fav-locations";
import "./css/profile.css";
export function Profile(props) {
	console.log(props.currentUser)
	return (
		<section className="container" role="region">
			<header>
				<img
					className="profile-img"
					src={defaultImage}
					alt="profile image"
				/>
				<h1>User1234</h1>
				<button className="btn">Edit</button>
			</header>
			<article>
				<h2>about</h2>
				<p>lorem ipsum</p>
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
	const { currentUser } = state.auth;
	return {
		currentUser: state.auth.currentUser
	};
};

export default requiresLogin()(connect(mapStateToProps)(Profile))