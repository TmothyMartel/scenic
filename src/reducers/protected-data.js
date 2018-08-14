import {
	FETCH_PROTECTED_DATA_SUCCESS,
	FETCH_PROTECTED_DATA_ERROR
} from "../actions/protected-data";

const initialState = {
	data: "",
	error: null,
	locations: [
		{
			coordinates: {
				lat: 1234322,
				long: -3845753
			},
			title: "harlem",
			description: "blah blah",
			image: ""
		}
	]
};

export default function reducer(state = initialState, action) {
	if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
		return Object.assign({}, state, {
			data: action.data,
			error: null
		});
	} else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}
