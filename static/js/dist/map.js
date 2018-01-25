'use strict';

function initMap() {
    var coordinates = {
        lat: 4.633864,
        lng: 7.945659
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coordinates
    });
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
}
//# sourceMappingURL=map.js.map
