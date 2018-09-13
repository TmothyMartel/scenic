import React from "react";
import { shallow } from "enzyme";

import { Profile } from "../components/profile/profile";

describe("<Profile />", () => {
	const currentUser = {
		username: "test",
		imageUrl: "../../public/images/user.svg",
		about: "test info"
	};
	it("Renders without crashing", () => {
		shallow(<Profile currentUser={currentUser} />);
	});
});
