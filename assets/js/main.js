//base
const map = L.map('map', { zoomControl: false }).setView([-33.5920, -70.5700], 14);
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

const Base = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const Calles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const Satelite = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const Ciclovias = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';
const Avenidas = 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png';
const Publico = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const Metros = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
const Rutas = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

const baseLayers = {
       Base: L.tileLayer(Base, { minZoom: 1, maxZoom: 18 }),
    Calles: L.tileLayer(Calles, { minZoom: 1, maxZoom: 18 }),
     Satelite: L.tileLayer(Satelite, { minZoom: 1, maxZoom: 18 }),
    Ciclovias: L.tileLayer(Ciclovias, { minZoom: 1, maxZoom: 18 }),
    Avenidas: L.tileLayer(Avenidas, { minZoom: 1, maxZoom: 18 }),
    Publico: L.tileLayer(Publico, { minZoom: 1, maxZoom: 18 }),
    Metros: L.tileLayer(Metros, { minZoom: 1, maxZoom: 18 }),
    Rutas: L.tileLayer(Rutas, { minZoom: 1, maxZoom: 18 }),
};

//zoom
new L.Control.Zoom({ position: 'topright' }).addTo(map);

//cuadro
map.addLayer(baseLayers.Base);
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
const ballena = L.marker([-33.599266, -70.556003]);

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

//textos
point = L.marker([-33.612367, -70.572543]).addTo(map).bindPopup
    ("<center><b>ELENA</b></center> <li>Santa Elena con Eyzaguirre</li><li>Orilla muro area verde.</li><li>3 tixs.</li>");

point = L.marker([-33.612422, -70.573534]).addTo(map).bindPopup
    ("<center><b>SUBTERRANEO</b></center> <li>Estacionamiento Subterraneo.</li><li>8 tixs.</li><li>Coordinar limpieza.</li>");

point = L.marker([-33.609554, -70.575515]).addTo(map).bindPopup
    ("<center><b>PUENTE</b></center> <li>Plaza de Puente Alto.</li><li>Gran convocatoria.</li><li>Entre 10 a 20 tixs</li>");

point = L.marker([-33.608687, -70.577718]).addTo(map).bindPopup
    ("<center><b>ESTACIONAMIENTOS</b></center> <li>Estacionamientos Fruna</li><li>Cuidadores autos</li><li>5 a 7 tixs</li>");

point = L.marker([-33.60781, -70.57882]).addTo(map).bindPopup
    ("<center><b>MATTE</b></center> <li>Plaza La Matte.</li><li>Cocina Red, Barbería.</li><li>3 a 5 tixs aprox.</li>");

point = L.marker([-33.60355, -70.57611]).addTo(map).bindPopup
    ("<center><b>PAZ</b></center> <li>Plaza La Paz</li><li>Actividad barberia.</li><li>4 a 6 tixs aprox.</li>");

point = L.marker([-33.576906, -70.581498]).addTo(map).bindPopup
    ("<center><b>SOTERO</b></center>  <li>Hospital Sotero del Rio.</li><li>Area verde.</li><li>3 tixs aprox.</li>");

point = L.marker([-33.577262, -70.582232]).addTo(map).bindPopup
    ("<center><b>BANDEJON</b></center> <li>Bandejon central</li><li>Detras estacion Metro</li><li>3 tixs aprox.</li><li>1 carpa.</li>");

point = L.marker([-33.576219, -70.582849]).addTo(map).bindPopup
    ("<center><b>JEHOVA</b></center> <li>Esquina templo</li><li>1 carpa</li><li>1 tix.</li>");

point = L.marker([-33.614244, -70.57489]).addTo(map).bindPopup
    ("<center><b>PODEROSO</b></center> <li>Frente a El Poderoso</li><li>2 rucos.</li><li>Referencia escultura</li><li>3 tixs aprox.</li>");

point = L.marker([-33.595561, -70.578706]).addTo(map).bindPopup
    ("<center><b>REJAS</b></center> <li>Frente a Municipalidad.</li><li>Bajo metro, entre rejas.</li><li>1 tix (esporadico)</li>");

point = L.marker([-33.599266, -70.556003]).addTo(map).bindPopup
    ("<center><b>BALLENA</b></center> <li>Cerro La Ballena.</li><li>1 ruco.</li><li>4 tixs.</li><li>Bajan con termo.</li>");

//zoom
const osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { minZoom: 0, maxZoom: 18 });
const miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, minimized: true, position: 'bottomright' }).addTo(map);
const escala = L.control.scale({ position: 'bottomleft', imperial: false });
map.addControl(escala);