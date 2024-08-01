var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
};


const buttontomap = document.getElementById('map_dir');
const linktomapcopy = 'https://www.google.co.in/maps/@22.377462,69.8336127,267m/data=!3m1!1e3'
const reallink = `https://www.google.co.in/maps/@${position.coords.latitude},${position.coords.longitude},270m/data=!3m1!1e3`
function open(){
  window.open(reallink)
}


