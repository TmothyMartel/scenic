import React from "react";
import "./drop-menu.css";
import menu from "../../images/menu.svg";
export default class DropMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			displayMenu: false
		};

		this.showDropMenu = this.showDropMenu.bind(this);
		this.hideDropMenu = this.hideDropMenu.bind(this);
	}

	showDropMenu(e) {
		e.preventDefault();
		this.setState({ displayMenu: true }, () => {
			document.addEventListener("click", this.hideDropMenu);
		});
	}

	hideDropMenu() {
		this.setState({ displayMenu: false }, () => {
			document.removeEventListener("click", this.hideDropMenu);
		});
	}

	render() {
		return (
			<div className="dropdown">
				<div className="button" onClick={this.showDropMenu} />

				{this.state.displayMenu ? (
					<ul>
						<li>profile</li>
						<li>locations</li>
						<li>logout</li>
					</ul>
				) : null}
			</div>
		);
	}
}

