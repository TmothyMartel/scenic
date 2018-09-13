import React from "react"
import {
    shallow
} from "enzyme";
import {
    DropMenu
} from "../components/dropmenu/drop-menu"

describe('<DropMenu />', () => {
    it('Renders without crashing', () => {
        shallow( < DropMenu / > )
    })
})