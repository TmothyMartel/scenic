import React from "react" 
import { shallow } from "enzyme";

import {Detail} from "../components/detail/detail"

describe('<Detail />', () => {
    it('Renders without crashing', () => {
    shallow(<Detail />) 
    })
})