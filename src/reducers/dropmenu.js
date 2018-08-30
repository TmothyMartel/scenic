import { TOGGLE_DROPMENU } from "../actions/dropmenu";

const initialState = {
	display: false
};

export default function reducer(state = initialState, action) {
	if (action.type === TOGGLE_DROPMENU) {
		return Object.assign({}, state, {
			display: !state.display
		});
	}
	return state;
}
