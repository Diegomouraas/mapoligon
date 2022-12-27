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

var polygonLayer
var plgGroup = L.featureGroup().addTo(map) 

var plgObj

const url = 'http://localhost:1434/plgs'
fetch(url).then((res) => {
    let dat = res.json()
    return dat
}).then((data) => {
    plgObj = data

    plgObj.forEach((plg) => {
        polygonLayer = L.polygon(plg.pontos).addTo(plgGroup);
    })
})

//map.removeLayer(plgGroup)

