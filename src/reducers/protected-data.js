import {
	FETCH_PROTECTED_DATA_SUCCESS,
	FETCH_PROTECTED_DATA_ERROR
} from "../actions/protected-data";
import harlemMeer from "../images/harlem-meer.jpg";
import lighthouse from "../images/lightblur.jpg";
import longIsle from "../images/longisle.jpg";
import bkBridge from "../images/bkBridge.jpg";
import prospectPark from "../images/prospectpark.jpg";
import rooseveltIsland from "../images/roosevelt-isle.jpg";
const initialState = {
	data: "",
	error: null,
	locations: [
		{
			coordinates: {
				lat: 1234322,
				long: -3845753
			},
			title: "harlem meer",
			description: "blah blah",
			image: "/images/harlem-meer.jpg"
		},
		{
			coordinates: {
				lat: 1234322,
				long: -3845753
			},
			title: "Little Red Lighthouse",
			description: "blah blah",
			image: "/images/lightblur.jpg"
		},
		{
			coordinates: {
				lat: 1234322,
				long: -3845753
			},
			title: "Long Island City",
			description: "blah blah",
			image: longIsle
		},
		{
			coordinates: {
				lat: 1234322,
				long: -3845753
			},
			title: "Brooklyn Bridge",
			description: "blah blah",
			image: "/images/bkBridge.jpg"
		},
		{
			coordinates: {
				lat: 1234322,
				long: -3845753
			},
			title: "Prospect Park",
			description: "blah blah",
			image: prospectPark
		},
		{
			coordinates: {
				lat: 1234322,
				long: -3845753
			},
			title: "Roosevelt Island",
			description: "blah blah",
			image: rooseveltIsland
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
