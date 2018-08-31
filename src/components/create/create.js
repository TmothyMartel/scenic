import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field, focus } from "redux-form";
import Input from "../input";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import { createLocation } from "../../actions/protected-data";
import { required, nonEmpty } from "../../validators";
import "../css/forms.css";

export class Create extends React.Component {
	onSubmit(values, createdBy) {
		const { title, image, description, photoTips } = values;
		const location = { title, image, description, photoTips, createdBy };
		return this.props
			.dispatch(createLocation(location))
			.then(() => console.log(location))
			.then(() => this.props.history.push("/locations"));
	}

	render() {
		const user = this.props.currentUser.username;
		return (
			<section className="wrapper">
				<h1>Add a location</h1>
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values, user)
					)}
				>
					<Field
						name="title"
						type="text"
						component={Input}
						label="title"
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
						name="description"
						type="textarea"
						component={Input}
						label="description"
						validate={[required, nonEmpty]}
					/>
					<Field
						className="form-input"
						name="photoTips"
						type="text"
						component={Input}
						label="Photo Ideas"
					/>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>

				<p> Changed your mind? </p>
				<Link to="locations">Go Back</Link>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.auth.currentUser
	};
};

Create = connect(mapStateToProps)(Create);

export default requiresLogin()(
	reduxForm({
		form: "create",
		onSubmitFail: (errors, dispatch) =>
			dispatch(focus("create", Object.keys(errors)[0]))
	})(Create)
);
