import React from "react";
import { connect } from "react-redux";
//import { fetchProtectedData } from "../actions/protected-data";
import { Link } from "react-router-dom";
import "./drop-menu.css";
import menu from "../../images/menu.svg";
import { showDropMenu } from "../../actions/dropmenu";

export class DropMenu extends React.Component {
	render() {
		console.log(this.props.display);
		return (
			<div
				className="dropdown"
				onClick={() => this.props.dispatch(showDropMenu())}
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
						<Link className="link" to="/login">
							<li>login</li>
						</Link>
						<li className="logout">logout</li>
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

// constructor() {
// 		super();

// 		this.state = {
// 			displayMenu: false
// 		};

// 		this.showDropMenu = this.showDropMenu.bind(this);
// 		this.hideDropMenu = this.hideDropMenu.bind(this);
// 	}

// 	showDropMenu(e) {
// 		e.preventDefault();
// 		this.setState({ displayMenu: true }, () => {
// 			document.addEventListener("click", this.hideDropMenu);
// 		});
// 	}

// 	hideDropMenu() {
// 		this.setState({ displayMenu: false }, () => {
// 			document.removeEventListener("click", this.hideDropMenu);
// 		});
// 	}
