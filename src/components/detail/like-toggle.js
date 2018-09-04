// import React from "react";
// import { connect } from "react-redux";
// import likeIcon from "../../images/like.svg";
// import likedIcon from "../../images/liked.svg";
// import {likeLocation} from "../../actions/protected-data";

// export function LikeToggle(props) {
// 	if (props.liked === false) {
// 	return (
// 	<img className="like-icon" onClick={() => props.dispatch(likeLocation)} src={likeIcon} alt="">;
// 	)
// 	}
// 	else {
// 		return (
// 			<img className="like-icon" onClick={() => props.dispatch(likeLocation)} src={likedIcon} alt="">;
// 		)
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 	liked: this.state.protectedData.liked,
// 	singleLocation: this.state.protectedData.singleLocation
// 	}
// }

// export default connect(mapStateToProps)(LikeToggle)
