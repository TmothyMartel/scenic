import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Form from "../form";
import "../css/forms.css";

export function SignUp(props) {
	return (
		<section className="wrapper">
			<h1>Sign Up</h1>
			<Form />
			<p>Already have an account?</p>
			<Link to="login">Login</Link>
		</section>
	);
}

export default connect()(SignUp);
