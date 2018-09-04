import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearAuth } from "../../actions/auth";

export function LoginToggle(props) {
	if (props.authToken === null) {
		return (
			<div>
				<Link className="link" to="/signup">
					<li>Sign Up</li>
				</Link>
				<Link className="link" to="/login">
					<li>Login</li>
				</Link>
			</div>
		);
	} else {
		return (
			<div>
				<Link className="link" to="/profile">
					<li>profile</li>
				</Link>
				<Link className="link" to="/locations">
					<li>locations</li>
				</Link>
				<Link className="link" to="/create">
					<li>Add Location</li>
				</Link>
				<li
					className="logout"
					onClick={() => props.dispatch(clearAuth())}
				>
					Logout
				</li>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authToken: state.auth.authToken
	};
};

export default connect(mapStateToProps)(LoginToggle);
