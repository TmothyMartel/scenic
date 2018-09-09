import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
//import likeIcon from "../../images/like.svg";
//import likedIcon from "../../images/liked.svg";
//import LikeToggle from "./like-toggle";
import "./detail.css";
import {
	fetchSingleLocation,
	favoritedLocation
} from "../../actions/protected-data";

export class Detail extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.dispatch(fetchSingleLocation(id));
	}

	render() {
		console.log(this.props.singleLocation);
		return (
			<div className="wrapper detail-container container">
				<div className="sub-container">
					<img
						className="detail-img"
						src={this.props.singleLocation.image}
						alt={this.props.singleLocation.title}
					/>

					<p className="creator">
						added by {this.props.singleLocation.createdBy}
					</p>
					<img
						className="like-icon"
						src={
							this.props.singleLocation.favorite
								? "../images/red-heart.svg"
								: "../images/white-heart.svg"
						}
						alt="heart icon"
						onClick={() =>
							this.props.dispatch(
								favoritedLocation(this.props.match.params.id)
							)
						}
					/>
				</div>

				<h2 className="title">{this.props.singleLocation.title}</h2>
				<article className="about">
					<h3> About this Location</h3>
					<p className="description">
						{this.props.singleLocation.description}
					</p>
				</article>
				<article className="map">
					<h3>map</h3>
					<p className="map-content">map embed here</p>
				</article>
				<article className="tips">
					<h3>Photo ideas and opportunities</h3>
					<p className="tips-content">tips go here</p>
				</article>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		singleLocation: state.protectedData.singleLocation,
		favorited: state.protectedData.favorited
	};
};

export default requiresLogin()(connect(mapStateToProps)(Detail));
