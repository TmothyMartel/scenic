import {
	FETCH_LOCATIONS_SUCCESS,
	FETCH_LOCATIONS_ERROR
} from "../actions/protected-data";

const initialState = {
	data: "",
	error: null,
	// locations: [
	// 	{
	// 		coordinates: {
	// 			lat: 1234322,
	// 			long: -3845753
	// 		},
	// 		title: "Harlem Meer",
	// 		description:
	// 			"The Harlem Meer occupies the northeast corner of New York City's Central Park. It lies west of Fifth Avenue, south of 110th Street, and north of the Conservatory Garden.",
	// 		image: "/images/harlem-meer.jpg",
	// 		photoTips: "Long exposure, HDR landscape, modeling photoshoot"
	// 	},
	// 	{
	// 		coordinates: {
	// 			lat: 1234322,
	// 			long: -3845753
	// 		},
	// 		title: "Little Red Lighthouse",
	// 		description: "blah blah",
	// 		image: "/images/lightblur.jpg"
	// 	},
	// 	{
	// 		coordinates: {
	// 			lat: 1234322,
	// 			long: -3845753
	// 		},
	// 		title: "Long Island City",
	// 		description: "blah blah",
	// 		image: "/images/longisle.jpg"
	// 	},
	// 	{
	// 		coordinates: {
	// 			lat: 1234322,
	// 			long: -3845753
	// 		},
	// 		title: "Brooklyn Bridge",
	// 		description: "blah blah",
	// 		image: "/images/bkBridge.jpg"
	// 	},
	// 	{
	// 		coordinates: {
	// 			lat: 1234322,
	// 			long: -3845753
	// 		},
	// 		title: "Prospect Park",
	// 		description: "blah blah",
	// 		image: "/images/prospectpark.jpg"
	// 	},
	// 	{
	// 		coordinates: {
	// 			lat: 1234322,
	// 			long: -3845753
	// 		},
	// 		title: "Roosevelt Island",
	// 		description: "blah blah",
	// 		image: "/images/roosevelt-isle.jpg"
	// 	}
	// ]

	locations: []
};

export default function reducer(state = initialState, action) {
	if (action.type === FETCH_LOCATIONS_SUCCESS) {
		console.log(action);
		return Object.assign({}, state, {
			locations: action.locations,
			error: null
		});
	} else if (action.type === FETCH_LOCATIONS_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}
