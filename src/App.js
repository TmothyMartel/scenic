import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import NavBar from "./components/nav-bar";
import Landing from "./components/landing/landing";
import Profile from "./components/profile/profile";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Create from "./components/create/create";
import Locations from "./components/locations";
import Detail from "./components/detail/detail";
import { refreshAuthToken } from "./actions/auth";

export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.loggedIn && this.props.loggedIn) {
			// When we are logged in, refresh the auth token periodically
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			// Stop refreshing when we log out
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000 // One hour
		);
	}

	stopPeriodicRefresh() {
		if (!this.refreshInterval) {
			return;
		}

		clearInterval(this.refreshInterval);
	}

	render() {
		return (
			<div className="app">
				<NavBar />
				<Route exact path="/" component={Landing} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/locations" component={Locations} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/create" component={Create} />
				<Route exact path="/detail" component={Detail} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
