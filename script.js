let latitude = null;
let longitude = null;

const x = document.getElementById("demo");
const buttontomap = document.getElementById("map_dir");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  x.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
}

function errorHandler() {
  x.innerHTML = "Please allow location permission.";
}

buttontomap.addEventListener("click", function () {
  if (latitude !== null && longitude !== null) {
    const mapURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapURL, "_blank");
  } else {
    alert("Click Get Location first!");
  }
});
