import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import { fetchCreatedLocations } from "../../actions/protected-data";
import "../css/locations.css";

export class AddedLocations extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCreatedLocations());
	}

	render() {
		const createdLocations = this.props.createdLocations.map(
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
				<ul className="list">{createdLocations}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		createdLocations: state.protectedData.createdLocations
	};
};

export default requiresLogin()(connect(mapStateToProps)(AddedLocations));


