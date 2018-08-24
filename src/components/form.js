import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import {Redirect} from 'react-router-dom';
import Input from "./input";
import { login } from "../actions/auth";
import { registerUser } from "../actions/users";
import {
	required,
	nonEmpty,
	email,
	matches,
	length,
	isTrimmed
} from "../validators";
import "./css/forms.css";
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches("password");

export class Form extends React.Component {

	

	onSubmit(values) {
		const { name, email, username, password, about } = values;
		const user = { username, email, about, password, name };
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
			//.then(() => this.props.history.push('/locations'));
	}

	render() {
		return (
				
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}
				>
					<Field
						name="name"
						type="text"
						component={Input}
						label="Name:"
					/>
					<Field
						name="email"
						type="email"
						component={Input}
						label="Email Address:"
						validate={[required, nonEmpty]}
					/>
					<Field
						name="image"
						type="text"
						component={Input}
						label="Image url:"
					/>
					<Field
						name="about"
						type="textarea"
						component={Input}
						label="About:"
					/>
					<Field
						className="form-input"
						name="username"
						type="text"
						component={Input}
						label="Username:"
						validate={[required, nonEmpty, isTrimmed]}
					/>
					<Field
						className="form-input"
						name="password"
						type="password"
						component={Input}
						label="Password:"
						validate={[required, passwordLength, isTrimmed]}
					/>
					<Field
						className="form-input"
						name="confirm"
						type="password"
						component={Input}
						label="Confirm Password:"
						validate={[required, nonEmpty, matchesPassword]}
					/>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			
		);
	}
}

export default reduxForm({
	form: "form",
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus("form", Object.keys(errors)[0]))
})(Form);
