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
    var markLayer = []
    var polygonLayer
    var centralMarker

    var nPoligono = false;

    function onMapClick(e) {
        if (nPoligono) {
            pontos.push({"lat":e.latlng.lat, "lng":e.latlng.lng});
            markLayer.push(L.marker({"lat":e.latlng.lat, "lng":e.latlng.lng}).addTo(map))

            /*
            if (centralMarker) map.removeLayer(centralMarker);
            centralMarker = L.marker(pontoCent(pontos)).addTo(map);
            */

            if (pontos.length > 1) map.removeLayer(polygonLayer);
            polygonLayer = L.polygon(pontos).addTo(map);
            
        }
        
    }
    

    function pontoCent(pts) {
        let x = 0
        let y = 0
        let pCent = {
            "lat": 0,
            "lng": 0
        }

        pts.forEach(vertice => {
            x += vertice.lat;
            y += vertice.lng;
        })
        
        pCent.lat = x/pts.length;
        pCent.lng = y/pts.length;

        return pCent;
    }

    function novoPoligono(){
        nPoligono = !nPoligono;
        
    }

    function del(){
        if (nPoligono) {
            map.removeLayer(polygonLayer);
            markLayer.forEach((marker, id) => {
                map.removeLayer(markLayer[id]);
                pontos.pop();//------------------------------
            })

        }
        
    }

    // Eventos
    map.on('click', onMapClick);

    document.getElementById("btei").addEventListener("click", novoPoligono);
    document.getElementById("bdel").addEventListener("click", del);
