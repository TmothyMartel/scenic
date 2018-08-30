import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginToggle from "./login-toggle";
import { clearAuth } from "../../actions/auth";
import "./drop-menu.css";
import { toggleDropMenu } from "../../actions/dropmenu";

export class DropMenu extends React.Component {
	render() {
		return (
			<div
				className="dropdown"
				onClick={() => this.props.dispatch(toggleDropMenu())}
			>
				<div className="button" />

				{this.props.display ? (
					<ul className="menu">
						<Link className="link" to="/profile">
							<li>profile</li>
						</Link>
						<Link className="link" to="/locations">
							<li>locations</li>
						</Link>
						<Link className="link" to="/signup">
							<li>sign up</li>
						</Link>
						<LoginToggle />
					</ul>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		display: state.menu.display
	};
};

export default connect(mapStateToProps)(DropMenu);

// <Link className="link" to="/login">
// 							<li>login</li>
// 						</Link>
// 						<li
// 							className="logout"
// 							onClick={() => this.props.dispatch(clearAuth())}
// 						>
// 							logout
// 						</li>
