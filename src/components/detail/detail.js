import React from "react";
import { connect } from "react-redux";
import "./detail.css";
import { fetchProtectedData } from "../../actions/protected-data";
import { API_BASE_URL } from "../../config";

export class Detail extends React.Component {
	render() {
		return (
			<div className="container">
				<img
					className="detail-img"
					src={API_BASE_URL + this.props.locations[0].image}
				/>

				<h2>{this.props.locations[0].title}</h2>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		locations: state.protectedData.locations
	};
};

export default connect(mapStateToProps)(Detail);
