let latitude = null;
let longitude = null;

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  x.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}


const buttontomap = document.getElementById('map_dir');
const linktomapcopy = 'https://www.google.co.in/maps/@22.377462,69.8336127,267m/data=!3m1!1e3'

buttontomap.addEventListener('click', function () {
  if (latitude !== null && longitude !== null) {
    const reallink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(reallink, "_blank");
  } else {
    alert("Please allow location access first.");
  }
});


