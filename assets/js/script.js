function initMap() {
/* description: setting markers coordinates in array*/
    var locations = [
         ['<h3>Lucerne Package</h3>', 47.050321,8.307818],
         ['<h3>Granada Package</h3>', 37.173484,-3.598352],
         ['<h3>Arles Package</h3>', 43.676355,4.624997],
         ['<h3>Istra Package</h3>', 45.335663,14.311068],
         
         ['<h3>Florence Package</h3>', 43.757439,11.247571],
         ['<h3>Corfu Package</h3>', 39.649597,19.860389],
         
    ];
    /* description: starting a map at  desired coordinates and  zoom*/
    var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 6,
         center: new google.maps.LatLng(41.900276,12.492046),
         disableDefaultUI: true
         
    });
/* description: initializing infoWindows*/
    var infowindow = new google.maps.InfoWindow();
/* description: putting markers down on the map*/
    var marker, i;

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
             map: map
        });
/* description: adding event Listener to activate  the infoWindows pop up bubbles*/
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
             return function() {
                 infowindow.setContent(locations[i][0]);
                 infowindow.open(map, marker);
             };
        })(marker, i));
    }
    
}