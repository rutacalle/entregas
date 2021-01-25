//base
const map = L.map('map', { zoomControl: false }).setView([-33.5920, -70.5811], 14);
const title = L.control();
title.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info');
    div.innerHTML +=
        '<h6>Puntos de entrega</h6> Desayunos, Almuerzos y Ruta noche';

    return div;
};
title.addTo(map);
//----------------------------------------------------------------------
//mapas base

const CartoDB = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const Esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const CyclOSM = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';
const OSM_BZH = 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png';
const OSM_HOT = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const OSM_Fr = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
const OSM_CH = 'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png';
const OSM_DE = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

const baseLayers = {
       CartoDB: L.tileLayer(CartoDB, { minZoom: 1, maxZoom: 18 }),
    OSM: L.tileLayer(osmUrl, { minZoom: 1, maxZoom: 18 }),
     Esri: L.tileLayer(Esri, { minZoom: 1, maxZoom: 18 }),
    CyclOSM: L.tileLayer(CyclOSM, { minZoom: 1, maxZoom: 18 }),
    OSM_BZH: L.tileLayer(OSM_BZH, { minZoom: 1, maxZoom: 18 }),
    OSM_HOT: L.tileLayer(OSM_HOT, { minZoom: 1, maxZoom: 18 }),
    OSM_Fr: L.tileLayer(OSM_Fr, { minZoom: 1, maxZoom: 18 }),
    OSM_CH: L.tileLayer(OSM_CH, { minZoom: 1, maxZoom: 18 }),
    OSM_DE: L.tileLayer(OSM_DE, { minZoom: 1, maxZoom: 18 }),

};

//zoom
new L.Control.Zoom({ position: 'topright' }).addTo(map);

//cuadro
map.addLayer(baseLayers.CartoDB);
L.control.layers(baseLayers).addTo(map);

//marcadores
const elena = L.marker([-33.612367, -70.572543]);
const tottus = L.marker([-33.612422, -70.573534]);
const puente = L.marker([-33.609554, -70.575515]);
const fruna = L.marker([-33.608687, -70.577718]);
const matte = L.marker([-33.60781, -70.57882]);
const paz = L.marker([-33.60355, -70.57611]);
const sotero = L.marker([-33.576906, -70.581498]);
const bandejon = L.marker([-33.577262, -70.582232]);
const jehova = L.marker([-33.576219, -70.582849]);
const poderoso = L.marker([-33.614244, -70.57489]);
const rejas = L.marker([-33.595561, -70.578706]);

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

//textos
point = L.marker([-33.612367, -70.572543]).addTo(map).bindPopup
    ("<center><b>Punto 1/11 (elena)</b></center> <li>Santa Elena con Eyzaguirre</li><li>Orilla muro area verde.</li><li>3 tixs.</li>");

point = L.marker([-33.612422, -70.573534]).addTo(map).bindPopup
    ("<center><b>Punto 2/11 (tottus)</b></center> <li>Estacionamiento Subterraneo.</li><li>8 tixs.</li><li>Coordinar limpieza.</li>");

point = L.marker([-33.609554, -70.575515]).addTo(map).bindPopup
    ("<center><b>Punto 3/11 (puente)</b></center> <li>Plaza de Puente.</li><li>Alta convocatoria.</li><li>Entre 10 a 20 tixs</li>");

point = L.marker([-33.608687, -70.577718]).addTo(map).bindPopup
    ("<center><b>Punto 4/11 (fruna)</b></center> <li>Cuidadores autos</li><li>5 a 7 tixs</li>");

point = L.marker([-33.60781, -70.57882]).addTo(map).bindPopup
    ("<center><b>Punto 5/11 (matte)</b></center> <li>Plaza La Matte.</li><li>Cocina Red, Barbería.</li><li>3 a 5 tixs aprox.</li>");

point = L.marker([-33.60355, -70.57611]).addTo(map).bindPopup
    ("<center><b>Punto 6/11 (paz)</b></center> <li>Plaza La Paz</li><li>Actividad barberia.</li><li>4 a 6 tixs aprox.</li>");

point = L.marker([-33.576906, -70.581498]).addTo(map).bindPopup
    ("<center><b>Punto 7/11 (sotero)</b></center>  <li>Hospital Sotero del Rio.</li><li>Area verde.</li><li>3 tixs aprox.</li>");

point = L.marker([-33.577262, -70.582232]).addTo(map).bindPopup
    ("<center><b>Punto 8/11 (bandejon)</b></center> <li>Bandejon central</li><li>Detras estacion Metro</li><li>3 tixs aprox.</li><li>1 carpa.</li>");

point = L.marker([-33.576219, -70.582849]).addTo(map).bindPopup
    ("<center><b>Punto 9/11 (jehova)</b></center> <li>Esquina templo</li><li>1 carpa</li><li>1 tix.</li>");

point = L.marker([-33.614244, -70.57489]).addTo(map).bindPopup
    ("<center><b>Punto 10/11 (poderoso)</b></center> <li>Frente a El Poderoso</li><li>2 rucos.</li><li>referencia escultura</li><li>3 tixs aprox.</li>");

point = L.marker([-33.595561, -70.578706]).addTo(map).bindPopup
    ("<center><b>Punto 11/11</b></center> <li>Frente a Municipalidad.</li><li>Bajo metro, entre rejas.</li><li>1 tix (esporadico)</li>");

//zoom
const osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { minZoom: 0, maxZoom: 18 });
const miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, minimized: true, position: 'bottomright' }).addTo(map);
const escala = L.control.scale({ position: 'bottomleft', imperial: false });
map.addControl(escala);