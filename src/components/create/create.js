import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import Input from "../input";
import { required, nonEmpty } from "../../validators";
import "../css/forms.css";

export class Create extends React.Component {
	onSubmit(values) {
		const { name, image, about, ideas } = values;
		const location = { name, image, about, ideas };
	}

	render() {
		return (
			<section role="region" className="wrapper">
				<h1>Add a location</h1>
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}
				>
					<Field
						name="name"
						type="text"
						component={Input}
						label="Name"
						validate={[required, nonEmpty]}
					/>
					<Field
						name="image"
						type="text"
						component={Input}
						label="Image url"
						validate={[required, nonEmpty]}
					/>
					<Field
						name="about"
						type="textarea"
						component={Input}
						label="About"
						validate={[required, nonEmpty]}
					/>
					<Field
						className="form-input"
						name="ideas"
						type="text"
						component={Input}
						label="Photo Ideas"
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
	form: "create",
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus("create", Object.keys(errors)[0]))
})(Create);
