import React from "react";
import { connect } from "react-redux";
import { fetchProtectedData } from "../actions/protected-data";
import "./css/locations.css";

export class Locations extends React.Component {
	componentDidMount() {
		//this.props.dispatch(fetchProtectedData());
	}
	render() {
		console.log(this.props.locations);
		const locations = this.props.locations.map((location, index) => (
			<li className="item-wrapper" key={index}>
				<img className="item" src={location.image} alt="" />
			</li>
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

//<p>{location.title}</p>
