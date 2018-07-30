mapboxgl.accessToken = 'pk.eyJ1IjoianVsZWJiYiIsImEiOiJjamp6aXJ2dHIyb3dpM3FtaDIwMnZiZjA5In0.Eop810b-IIfs27YQyrn1Tw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [3.12, 50.59], // starting position
    zoom: 15 // starting zoom
});



// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

$('.carousel').carousel({
  interval: 2000
})
