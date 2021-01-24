//base
const map = L.map('map', { zoomControl: false }).setView([-33.56, -70.56], 16);
const title = L.control();
title.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info');
    div.innerHTML +=
        '<h4>Puntos de entrega</h4> Desayunos, Almuerzos y Ruta noche';

    return div;
};
title.addTo(map);
//----------------------------------------------------------------------
//mapas base

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const CartoDB = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const Esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const CyclOSM = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';
const OSM_BZH = 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png';
const OSM_HOT = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const OSM_Fr = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
const OSM_CH = 'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png';
const OSM_DE = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

const baseLayers = {
    OSM: L.tileLayer(osmUrl, { minZoom: 1, maxZoom: 18 }),
    CartoDB: L.tileLayer(CartoDB, { minZoom: 1, maxZoom: 18 }),
    Esri: L.tileLayer(Esri, { minZoom: 1, maxZoom: 18 }),
    CyclOSM: L.tileLayer(CyclOSM, { minZoom: 1, maxZoom: 18 }),
    OSM_BZH: L.tileLayer(OSM_BZH, { minZoom: 1, maxZoom: 18 }),
    OSM_HOT: L.tileLayer(OSM_HOT, { minZoom: 1, maxZoom: 18 }),
    OSM_Fr: L.tileLayer(OSM_Fr, { minZoom: 1, maxZoom: 18 }),
    OSM_CH: L.tileLayer(OSM_CH, { minZoom: 1, maxZoom: 18 }),
    OSM_DE: L.tileLayer(OSM_DE, { minZoom: 1, maxZoom: 18 }),

};
//cuadro
map.addLayer(baseLayers.OSM);
L.control.layers(baseLayers).addTo(map);
//zoom
new L.Control.Zoom({ position: 'topright' }).addTo(map);
//viajes





//marcadores
const myMarker1 = L.marker([-33.612367, -70.572543]);
const myMarker2 = L.marker([-33.612422, -70.573534]);
const myMarker3 = L.marker([-33.609554, -70.575515]);
const myMarker4 = L.marker([-33.608687, -70.577718]);
const myMarker5 = L.marker([-33.60781, -70.57882]);
const myMarker6 = L.marker([-33.60355, -70.57611]);
const myMarker7 = L.marker([-33.576812, -70.581634]);
const myMarker8 = L.marker([-33.577262, -70.582232]);
const myMarker9 = L.marker([-33.576219, -70.582849]);

const geoJsonLayer = L.geoJson().addTo(map);
map.addLayer(myMarker1);
map.addLayer(myMarker2);
map.addLayer(myMarker3);
map.addLayer(myMarker4);
map.addLayer(myMarker5);
map.addLayer(myMarker6);
map.addLayer(myMarker7);
map.addLayer(myMarker8);
map.addLayer(myMarker9);

//textos
point = L.marker([-33.612367, -70.572543]).addTo(map).bindPopup
    ("<center><b>Santa Elena con Eyzaguirre:</b></center> <li>Orilla muro area verde.</li><li>3 tixs.</li>");

point = L.marker([-33.612422, -70.573534]).addTo(map).bindPopup
    ("<center><b>Estacionamiento Tottus:</b></center> <li>Subterraneo.</li><li>8 tixs.</li>");

point = L.marker([-33.609554, -70.575515]).addTo(map).bindPopup
    ("<center><b>Plaza de Puente:</b></center> <li>Alta convocatoria</li><li>entre 10 a 20 tixs</li>");

point = L.marker([-33.608687, -70.577718]).addTo(map).bindPopup
    ("<center><b>Estacionamiento Fruna:</b></center> <li>colocar algo aqui</li><li>definir lugares de entrega</li>");

point = L.marker([-33.60781, -70.57882]).addTo(map).bindPopup
    ("<center><b>Plaza La Matte:</b></center> <li>barberia y cocina</li><li>3 a 5 tixs aprox.</li>");

point = L.marker([-33.60355, -70.57611]).addTo(map).bindPopup
    ("<center><b>Plaza La Paz:</b></center> <li>actividad barberia (editable)</li><li>4 a 6 tixs aprox.</li>");

point = L.marker([-33.576812, -70.581634]).addTo(map).bindPopup
    ("<center><b>Sotero:</b></center> <li>Area verde</li><li>3 tixs aprox.</li>");

point = L.marker([-33.577262, -70.582232]).addTo(map).bindPopup
    ("<center><b>Bandejon:</b></center> <li>Detras Metro</li><li>3 tixs aprox.</li><li>una carpa</li>");

point = L.marker([-33.576219, -70.582849]).addTo(map).bindPopup
    ("<center><b>Esquina Testigos de Jehova:</b></center> <li>una carpa</li><li>1 tio (Gary).</li>");

//zoom
const osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { minZoom: 0, maxZoom: 18 });
const miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, minimized: true, position: 'bottomright' }).addTo(map);
const escala = L.control.scale({ position: 'bottomleft', imperial: false });
map.addControl(escala);