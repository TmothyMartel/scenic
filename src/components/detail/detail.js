import React from "react";
import { connect } from "react-redux";
import likeIcon from "../../images/like.svg";
import "./detail.css";
import { fetchSingleLocation, fetchLocations } from "../../actions/protected-data";
import { API_BASE_URL } from "../../config";

export class Detail extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id
		this.props.dispatch(fetchSingleLocation(id));
	}

	render() {
		console.log(this.props.singleLocation)
		return (
			<div className="container">
				<img
					className="detail-img"
					src={this.props.singleLocation.image}
					alt={this.props.singleLocation.title}
				/>
				<div className="icon-container">
				<img className="like-icon" src={likeIcon} alt="heart icon" />
				</div>
				<h2 className="title">{this.props.singleLocation.title}</h2>
				<h3> About this Location</h3>
				<p className="description">
					{this.props.singleLocation.description}
				</p>

				<h3>map</h3>
				<p>map embed here</p>

				<h3>Photo ideas and opportunities</h3>
				<p>tips go here</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		singleLocation: state.protectedData.singleLocation
	};
};

export default connect(mapStateToProps)(Detail);

