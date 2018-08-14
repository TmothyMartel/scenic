import React from "react";
import { connect } from "react-redux";
import { fetchProtectedData } from "../actions/protected-data";

export class Locations extends React.Component {
	componentDidMount() {
		//this.props.dispatch(fetchProtectedData());
	}
	render() {
		console.log(this.props.locations);
		return (
			<div>
				<h1>Locations</h1>
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
