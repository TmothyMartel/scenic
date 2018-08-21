import { SHOW_DROPMENU, HIDE_DROPMENU } from "../actions/dropmenu";

const initialState = {
	display: false
};

export default function reducer(state = initialState, action) {
	if (action.type === SHOW_DROPMENU) {
		return Object.assign({}, state, {
			display: !state.display
		});
	}
	return state;
}

// hideDropMenu() {
// 	return Object.assign({}, state, {
// 			 displayMenu: false }, () => {
// 		document.removeEventListener("click", this.hideDropMenu);
// 	});
// }

// export default function reducer(state = initialState, action) {
// 	switch (action.type) {
// 		case TOGGLE_DROPMENU:
// 			return Object.assign({}, state, {
// 				displayMenu: action.menu
// 			});
// 		default:
// 			return state;
// 	}
// }
