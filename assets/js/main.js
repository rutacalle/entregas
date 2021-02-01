//base





const map = L.map('map', {
    zoomControl: false,
    fadeAnimation: false,
    markerZoomAnimation: false
}).setView([-33.5920, -70.5700], 14);

const title = L.control();
title.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info');
    div.innerHTML +=
        '<h6>Puntos de entrega</h6>Azul = ruco, carpa, colchon';
     

    return div;
};
title.addTo(map);
//----------------------------------------------------------------------
//mapas base

const Publico = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const Base = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const Calles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const Satelite = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const Ciclovias = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';
const Metros = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
const Rutas = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

const baseLayers = {
    
    Publico: L.tileLayer(Publico, {
        minZoom: 1, maxZoom: 18,
        updateWhenIdle: true,
        reuseTiles: true
    }),
    
    Base: L.tileLayer(Base, {
        minZoom: 1, maxZoom: 18,
        updateWhenIdle: true,
        reuseTiles: true
    }),
    Calles: L.tileLayer(Calles, {
        minZoom: 1, maxZoom: 18,
        updateWhenIdle: true,
        reuseTiles: true
    }),
    Satelite: L.tileLayer(Satelite, {
        minZoom: 1, maxZoom: 18,
        updateWhenIdle: true,
        reuseTiles: true
    }),
    Ciclovias: L.tileLayer(Ciclovias, {
        minZoom: 1, maxZoom: 18,
        updateWhenIdle: true,
        reuseTiles: true
    }),
    
    Metros: L.tileLayer(Metros, {
        minZoom: 1, maxZoom: 18,
        updateWhenIdle: true,
        reuseTiles: true
    }),
    Rutas: L.tileLayer(Rutas, {
        minZoom: 1, maxZoom: 18,
        updateWhenIdle: true,
        reuseTiles: true
    }),
};

//zoom
new L.Control.Zoom({ position: 'topright' }).addTo(map);

//cuadro
map.addLayer(baseLayers.Publico);
L.control.layers(baseLayers).addTo(map);


/*cobertura
var polygon = L.polygon([
    [-33.576219, -70.582849],
    [-33.576906, -70.581498],
    [-33.59934, -70.556156],
    [-33.612367, -70.572543],
    [-33.612422, -70.573534],
    [-33.614244, -70.57489],
    [-33.609554, -70.575515],
    [-33.608687, -70.577718],
    [-33.60781, -70.57882],
    [-33.60355, -70.57611],
    [-33.595561, -70.578706],
    [-33.577262, -70.582232],
]).addTo(map);
cobertura*/

/*cambiar color marcador
blue, gold, red, green, orange, yellow, violet, grey, black
*/


var green = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blue = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//marcadores y textos
const elena = L.marker([-33.612367, -70.572543], { icon: blue }).addTo(map).bindPopup
    ("<center><b>ELENA</b></center> <li>Santa Elena con Eyzaguirre</li><li>2 colchones.</li><li>Orilla muro area verde.</li><li>3 tixs.</li>");

const tottus = L.marker([-33.612422, -70.573534], { icon: blue }).addTo(map).bindPopup

    ("<center><b>SUBTERRANEO</b></center> <li>Estacionamiento Tottus.</li><li>13 tixs, colchones</li><li>Coordinar limpieza.</li>");


const puente = L.marker([-33.609554, -70.575515], { icon: blue }).addTo(map).bindPopup

    ("<center><b>PUENTE</b></center> <li>Plaza de Puente Alto.</li><li>2 colchones, góndola.</li><li>2 diabeticos.</li><li>Entre 10 a 20 tixs</li>");

const fruna = L.marker([-33.608687, -70.577718], { icon: green }).addTo(map).bindPopup

    ("<center><b>ESTACIONAMIENTOS</b></center> <li>Estacionamientos Fruna</li><li>Cuidadores autos</li><li>5 a 7 tixs</li>");

const matte = L.marker([-33.60781, -70.57882], { icon: green }).addTo(map).bindPopup

    ("<center><b>MATTE</b></center> <li>Plaza La Matte.</li><li>Cocina Red.</li></li><li>Actividad Barbería.</li><li>3 a 5 tixs aprox.</li>");

const paz = L.marker([-33.60355, -70.57611], { icon: blue }).addTo(map).bindPopup
    ("<center><b>PAZ</b></center> <li>Plaza La Paz</li><li>2 rucos, 3 colchones.</li><li>4 a 6 tixs aprox.</li>");

const sotero = L.marker([-33.576906, -70.581498], { icon: green }).addTo(map).bindPopup
    ("<center><b>SOTERO</b></center>  <li>Hospital Sotero del Rio.</li><li>Area verde.</li><li>3 tixs aprox.</li>");

const bandejon = L.marker([-33.577262, -70.582232], { icon: blue }).addTo(map).bindPopup
    ("<center><b>BANDEJON</b></center> <li>Bandejon central</li><li>Detras estacion Metro</li><li>3 tixs aprox.</li><li>1 carpa.</li>");

const jehova = L.marker([-33.576219, -70.582849], { icon: blue }).addTo(map).bindPopup
    ("<center><b>JEHOVA</b></center> <li>Esquina templo.</li><li>1 carpa.</li><li>1 tix.</li>");

const poderoso = L.marker([-33.614244, -70.57489], { icon: blue }).addTo(map).bindPopup
    ("<center><b>PODEROSO</b></center> <li>Frente a El Poderoso</li><li>2 rucos.</li><li>Referencia escultura</li><li>3 tixs aprox.</li>");

const rejas = L.marker([-33.595561, -70.578706], { icon: blue }).addTo(map).bindPopup
    ("<center><b>REJAS</b></center> <li>Frente a Municipalidad.</li><li>1 colchon.</li><li>Bajo metro, enrejado.</li><li>1 tix (esporadico)</li>");

const ballena = L.marker([-33.59934, -70.556156], { icon: blue }).addTo(map).bindPopup
    ("<center><b>BALLENA</b></center> <li>Cerro La Ballena.</li><li>1 ruco.</li><li>4 tixs.</li><li>Bajan con termo.</li>");

const parque = L.marker([-33.579942, -70.581753], { icon: blue }).addTo(map).bindPopup
    ("<center><b>PARQUE</b></center> <li>Frente Parque Nuestra</li><left>Señora de Gabriela.</left><li>2 colchones.</li><li>2 tixs.</li>");




const geoJsonLayer = L.geoJson().addTo(map);
map.addLayer(elena);
map.addLayer(tottus);
map.addLayer(puente);
map.addLayer(fruna);
map.addLayer(matte);
map.addLayer(paz);
map.addLayer(sotero);
map.addLayer(bandejon);
map.addLayer(jehova);
map.addLayer(poderoso);
map.addLayer(rejas);
map.addLayer(ballena);

  




