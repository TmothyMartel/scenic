import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import Input from "../input";
import { login } from "../../actions/auth";
import "../css/forms.css";
import { required, nonEmpty } from "../../validators";

export class Login extends React.Component {
	onSubmit(values) {
		const { username, password } = values;
		return this.props
			.dispatch(login(username, password))
			.then(() => this.props.history.push("/locations"));
	}
	render() {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}
		return (
			<section className="wrapper">
				<h1> Login </h1>{" "}
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}
				>
					{error}
					<Field
						className="form-input"
						name="username"
						type="text"
						id="username"
						component={Input}
						label="username"
						validate={[required, nonEmpty]}
					/>
					<Field
						className="form-input"
						name="password"
						type="password"
						id="password"
						component={Input}
						label="Password"
						validate={[required, nonEmpty]}
					/>
					<button
						className="btn"
						disabled={this.props.pristine || this.props.submitting}
					>
						Log In
					</button>
				</form>
			</section>
		);
	}
}

export default reduxForm({
	form: "login",
	onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(Login);
