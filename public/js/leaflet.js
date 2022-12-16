// Creating map options
var mapOptions = {
    center: [-23.0044222, -44.2880942],
    zoom: 13
}
 
// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var googleMap = new L.TileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}');

var googleSat = new L.TileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

// Adding layer to the map
googleSat.addTo(map);

// elementos
var points = []
var mark =[]
var poligon
var now

function onMapClick(e) {
    now = L.marker(e.latlng)//.addTo(map);
    //now.push(points)
    points.push(e.latlng);
    //map.addLayer(points)
    now.addTo(map);

    map.removeLayer(poligon);
    poligon = L.polygon(points).addTo(map);

    
}


map.on('click', onMapClick);

// eventos
document.getElementById("btei").addEventListener("click", tei);
document.getElementById("bdel").addEventListener("click", del);


function tei(){
    poligon = L.polygon(points).addTo(map);
    
}
function del(){
    map.removeLayer(poligon);
}