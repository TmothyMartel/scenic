import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import Input from "../input";
import {login} from '../../actions/auth'
import "../css/forms.css";
export class Login extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password))
		.then(() => this.props.history.push('/locations'));
	}
	render() {
		let error;
		if (this.props.error) {
			error = (
				<div aria-live="polite">
					{this.props.error}
				</div>
				)
		}
		return (
			<section role="region" className="wrapper">
				<h1> Login </h1>{" "}
				<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field
						className="form-input"
						name="Username"
						type="text"
						component={Input}
						label="username"
					/>
					<Field
						className="form-input"
						name="password"
						type="password"
						component={Input}
						label="Password"
					/>
					<button className="btn" type="submit">
						Submit{" "}
					</button>{" "}
				</form>{" "}
			</section>
		);
	}
}

export default reduxForm({
	form: "login",
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);
