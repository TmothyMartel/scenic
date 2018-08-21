import React from "react";
import { connect } from "react-redux";
import likeIcon from "../../images/like.svg";
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
					alt={this.props.locations[0].title}
				/>
				<img className="like-icon" src={likeIcon} alt="heart icon" />

				<h2 className="title">{this.props.locations[0].title}</h2>
				<h3> About this Location</h3>
				<p className="description">
					{this.props.locations[0].description}
				</p>
				<h3>Photo ideas and opportunities</h3>
				<p>{this.props.locations[0].photoTips}</p>
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
