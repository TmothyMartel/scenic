import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import Form from '../form'

import "../css/forms.css";


export function Edit(props) {

	
		return (
			<section role="region" className="wrapper">
				<h1>Edit location</h1>
				<Form />
			</section>
		);
	
}

export default reduxForm({
	form: "edit",
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus("edit", Object.keys(errors)[0]))
})(Edit);
