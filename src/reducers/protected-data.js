import {
	FETCH_LOCATIONS_SUCCESS,
	FETCH_LOCATIONS_ERROR,
	CREATE_LOCATION_SUCCESS,
	FETCH_SINGLE_LOCATION_SUCCESS,
	FETCH_FAVORITE_LOCATIONS_SUCCESS,
	FAVORITE_LOCATION
} from "../actions/protected-data";

const initialState = {
	data: "",
	error: null,
	locations: [],
	singleLocation: {},
	favorited: false,
	favoriteLocations: []
};

export default function reducer(state = initialState, action) {
	if (action.type === FETCH_LOCATIONS_SUCCESS) {
		return Object.assign({}, state, {
			locations: action.locations,
			error: null
		});
	} else if (action.type === FETCH_LOCATIONS_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	} else if (action.type === CREATE_LOCATION_SUCCESS) {
		return Object.assign({}, state, {
			locations: action.location,
			error: null
		});
	} else if (action.type === FETCH_SINGLE_LOCATION_SUCCESS) {
		return Object.assign({}, state, {
			singleLocation: action.singleLocation,
			error: null
		});
	} else if (action.type === FAVORITE_LOCATION) {
		return Object.assign({}, state, {
			favorited: true
		});
	}
	//else if (action.type === FETCH_FAVORITE_LOCATIONS_SUCCESS) {
	// 	return Object.assign({}, state, {
	// 		favoriteLocations: action.favoriteLocations
	// 	});
	// }
	return state;
}

// FindCoordinates
// function geocodeSearch(state) {
// 		var addressSearch = document.getElementById('address').value;
// 		geocoder.geocode( { 'address': addressSearch}, function(results, status) {
// 			if (status == 'OK') {
// 				map.setCenter(results[0].geometry.location);
// 				state.userLocation.lat = results[0].geometry.location.lat();
// 				state.userLocation.lng = results[0].geometry.location.lng();
// 				// get the wikipedia data now that the state var is updated
// 				getWikiGeoData(state);
// 			} else {
// 				alert("Whoops, that address didn't work! Try searching by a city, state, or zipcode.");
// 			}
// 		});
// 	}
