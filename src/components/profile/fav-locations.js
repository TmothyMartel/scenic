import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchFavoriteLocations } from "../../actions/protected-data";
import { Link } from "react-router-dom";
import "../css/locations.css";

export class FavLocations extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchFavoriteLocations());
	}

	render() {
		console.log(this.props.favoriteLocations);
		const favoriteLocations = this.props.favoriteLocations.map(
			(favoriteLocation, index) => (
				<Link to={`locations/${favoriteLocation.id}`} key={index}>
					<li
						className="item-wrapper"
						style={{
							background: `url(${favoriteLocation.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center"
						}}
					>
						<p>{favoriteLocation.title}</p>
					</li>
				</Link>
			)
		);
		return (
			<div className="container">
				<h1>Locations</h1>
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
