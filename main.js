/**
 * Created by Qeti on 12/30/2016.
 */
var map;
function initMap() {

    var location = {lat: 41.701808, lng: 44.799372}
    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8
    });


var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Hello World!'
});
}