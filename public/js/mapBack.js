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
    var markLayer = []// [L.marker({"lat": 0, "lng": 0}).addTo(map)]
    var polygonLayer
    var centralMarker

    var nPoligono = false;

    var limiteDeVelocidade

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
/*
    function onMarkClick(c) {
        console.log(c)
    }
    */

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
        console.log(pontos)
        
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

    function polSave(){
        let poldata = new XMLHttpRequest();
        let data = []

        data.push({
            "vellim": limiteDeVelocidade
        })

        data.push(pontos);

        poldata.open('POST', 'http://localhost:1434/map/npol', true)

        poldata.setRequestHeader("Content-type", "application/json;charset=UTF-8")

        poldata.send(JSON.stringify(data));

        console.log("show")
    }

    // Eventos
    map.on('click', onMapClick);

    const velLim = document.getElementById('vellim');
    velLim.addEventListener('change', (evento) => {
        limiteDeVelocidade = evento.target.value;
        console.log(limiteDeVelocidade);
    });

   // markLayer[0].on('click', onMarkClick);

   /* markLayer.on('click', function(e) {
        map.removeLayer(this);
      });/*/

    document.getElementById("btei").addEventListener("click", novoPoligono);
    document.getElementById("bdel").addEventListener("click", del);
    document.getElementById("bsav").addEventListener("click", polSave);
