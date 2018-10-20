import React from 'react';
import NodeGeocoder from 'node-geocoder';


export default function Map(props) {
    const geocoder = NodeGeocoder();
    let options = {
        provider: '',
        apiKey: 'AIzaSyChqMkEAPPuAP7TB4P09y6eMHcuY0-qlkw'
    }
    return (

        <p>Map goes here</p>
        
    )
}

// FindCoordinates
// function geocodeSearch(state) {
//    var addressSearch = document.getElementById('address').value;
//    geocoder.geocode( { 'address': addressSearch}, function(results, status) {
//      if (status == 'OK') {
//        map.setCenter(results[0].geometry.location);
//        state.userLocation.lat = results[0].geometry.location.lat();
//        state.userLocation.lng = results[0].geometry.location.lng();
//        // get the wikipedia data now that the state var is updated
//        getWikiGeoData(state);
//      } else {
//        alert("Whoops, that address didn't work! Try searching by a city, state, or zipcode.");
//      }
//    });
//  }