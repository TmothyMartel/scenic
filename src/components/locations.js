import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { Link } from "react-router-dom";
import { fetchLocations } from "../actions/protected-data";
import "./css/locations.css";

export class Locations extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchLocations());
	}

	render() {
		const locations = this.props.locations.map((location, index) => (
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
	return {
		locations: state.protectedData.locations
	};
};

export default requiresLogin()(connect(mapStateToProps)(Locations));
