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


// Marcadores e Poligonos
    var pontos = []
    var markLayer
    var polygonLayer

    function onMapClick(e) {
        markLayer = L.marker(e.latlng).addTo(map);
        pontos.push(e.latlng);
        
        map.removeLayer(polygonLayer);
        polygonLayer = L.polygon(pontos).addTo(map);
        
    }

    function tei(){
        polygonLayer = L.polygon(pontos).addTo(map);
        
    }

    function del(){
        map.removeLayer(polygonLayer);
    }

    // Eventos
    map.on('click', onMapClick);

    document.getElementById("btei").addEventListener("click", tei);
    document.getElementById("bdel").addEventListener("click", del);
