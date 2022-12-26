// Mapas
var mapOptions = {
    center: [-23.0044222, -44.2880942],
    zoom: 13
}

var map = new L.map('map', mapOptions);

var googleMap = new L.TileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}');

var googleSat = new L.TileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleSat.addTo(map);

var plgObj = window.plgs
//var poligonos = []
var polygonLayer

plgObj.forEach((plg) => {
    polygonLayer = L.polygon(plg.pontos).addTo(map);
})

