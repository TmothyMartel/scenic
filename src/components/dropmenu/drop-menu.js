import React from "react";
import { connect } from "react-redux";
import LoginToggle from "./login-toggle";
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
