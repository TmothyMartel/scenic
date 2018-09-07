import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import {
	fetchFavoriteLocations,
	fetchLocations
} from "../../actions/protected-data";
import { Link } from "react-router-dom";
import "../css/locations.css";

export class FavLocations extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchFavoriteLocations());
	}

	render() {
		const favoriteLocations = this.props.favoriteLocations.map(
			(location, index) => (
				<Link to={`locations/${location.id}`} key={index}>
					<li
						className="item-wrapper"
						style={{
							background: `url(${location.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center"
						}}
					>
						<p>{location.title}</p>
					</li>
				</Link>
			)
		);
		return (
			<div className="fav-container">
				<ul className="list">{favoriteLocations}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		favoriteLocations: state.protectedData.favoriteLocations
	};
};

export default requiresLogin()(connect(mapStateToProps)(FavLocations));

// const favoriteLocations = this.props.favoriteLocations.map(
// 			(favoriteLocation, index) => (
// 				<Link key={index}>
// 					<li
// 						className="item-wrapper"
// 						style={{
// 							background: `url(${favoriteLocation.image})`,
// 							backgroundSize: "cover",
// 							backgroundPosition: "center"
// 						}}
// 					>
// 						<p>{favoriteLocations.title}</p>
// 					</li>
// 				</Link>
// 			)
// 		);
