function handleGeocodeResult(latLng, address) {
  // TODO(olrichandrea): Write this function.
  //move to spot
  map.panTo(latLng);
  // - Place a marker on the map.
  var marker = new google.maps.Marker({
	  position: latLng,
    map: map
	});
  
  // - Write something in the log.
  log('Welcome to ' + address + '.');
  
  // - Make an infowindow on the marker, displaying the address.
  var addressBox = '<div id="content">'+
    address + '</div>';
  
  var infoWindow = new google.maps.InfoWindow({
    position: latLng,
    content: addressBox
  });
  infoWindow.open(map, marker);
  
  //window.alert(address + ': ' + latLng)
}

function log(msg) {
  var log = document.getElementById('log');
  log.innerHTML = log.innerHTML + '<div>' + msg + '</div>';
}

// TODO(florenciai): Write other functions to make geocoding work. When the
// geocoding is done, call handleGeocodeResult().


//function to handle invalid input
//i.e. when geocode returns NO result
function handleGeocodeFailure(address) {
  log('Sorry, ' + address + 'is not a valid address');
}

//possible function to handle multiple results?
/*
function handleMultipleResults(address) {
  alert('Sorry, your query - ' + address + ' - returned multiple results');
  log('Please refine your search.');
}
*/
