var map = L.map('map', {
    zoom: 11,
    center: [-29.46, 149.83],
});


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.vectorGrid.protobuf("https://storage.googleapis.com/wald-vector/tileserver/{z}/{x}/{y}.pbf").addTo(map);
