import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLocations } from "../actions/protected-data";
import "./css/locations.css";
import { API_BASE_URL } from "../config";

export class Locations extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchLocations());
	}

	render() {
		console.log(this.props.locations);
		const locations = this.props.locations.map((location, index) => (
			<Link to={`detail/${location.id}`}>
				<li
					className="item-wrapper"
					style={{
						background: `url(${location.image})`,
						backgroundSize: "cover",
						backgroundPosition: "center"
					}}
					key={index}
				>
					<p>{location.title}</p>
				</li>
			</Link>
		));
		return (
			<div className="container">
				<h1>Locations</h1>
				<ul className="list">{locations}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	// const { currentUser } = state.auth;
	return {
		locations: state.protectedData.locations
	};
};

export default connect(mapStateToProps)(Locations);
