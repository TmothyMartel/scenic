import React from "react";
import { shallow } from "enzyme";

import { Profile }from "../components/profile/profile";

describe("<Profile />", () => {
	it("Renders without crashing", () => {
		shallow(<Profile />);
	});
});
