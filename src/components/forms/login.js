import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import Input from "./input";
import "./css/forms.css";
export class Login extends React.Component {
	render() {
		return (
			<section role="region" className="wrapper">
				<h1>Login</h1>
				<form>
					<Field
						className="login-input"
						name="username"
						type="text"
						component={Input}
						label="username"
					/>
					<Field
						className="login-input"
						name="password"
						type="password"
						component={Input}
						label="Password"
					/>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</section>
		);
	}
}

export default reduxForm({
	form: "login"
})(Login);
