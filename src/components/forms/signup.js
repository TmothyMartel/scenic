import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import Input from "./input";
import "./css/forms.css";

export class SignUp extends React.Component {
	render() {
		return (
			<section role="region" className="wrapper">
				<h1>Sign Up</h1>
				<form>
					<Field
						name="name"
						type="text"
						component={Input}
						label="Name"
					/>
					<Field
						name="email"
						type="email"
						component={Input}
						label="Email Address"
					/>
					<Field
						name="about"
						type="textarea"
						component={Input}
						label="About"
					/>
					<Field
						className="login-input"
						name="username"
						type="text"
						component={Input}
						label="Username"
					/>
					<Field
						className="login-input"
						name="password"
						type="password"
						component={Input}
						label="Password"
					/>
					<Field
						className="login-input"
						name="confirm"
						type="password"
						component={Input}
						label="Confirm Password"
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
	form: "signup"
})(SignUp);
