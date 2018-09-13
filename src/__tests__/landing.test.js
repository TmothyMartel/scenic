import React from "react";
import {
	shallow
} from "enzyme";

import Landing from "../components/landing/landing";

describe("<Landing />", () => {
	it("Renders without crashing", () => {
		shallow( < Landing / > );
	});
});