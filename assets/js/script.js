function initMap() {
 
  var europe = {lat: 48.270611, lng:9.243381};
  var lucerne = {lat: 47.050321, lng:8.307818};
  var granada = {lat: 37.173484, lng:-3.598352};
  var arles = {lat: 43.676355, lng:4.624997};
  var istra = {lat: 45.335663, lng:14.311068};
  var florence ={lat:43.757439, lng:11.247570};
  var corfu ={lat:39.649597, lng:19.860389}
  var map = new google.maps.Map(
      document.getElementById('map'), {
          zoom: 4, 
          center: europe,
        disableDefaultUI: true
    });
  

  var marker = new google.maps.Marker({position: lucerne, map: map  });
  var spain= new google.maps.Marker({position: granada, map: map  });
  var france = new google.maps.Marker({position: arles, map: map });
  var croatia = new google.maps.Marker({position: istra, map: map});
  var italy = new google.maps.Marker({position: florence, map: map});
  var greece = new google.maps.Marker({position: corfu, map: map});

  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(16);
  map.setCenter(marker.getPosition());
  window.setTimeout(function() {map.panTo(marker.getPosition());
    }, 3000);
});

google.maps.event.addListener(spain,'click',function() {
    map.setZoom(16);
  map.setCenter(spain.getPosition());
  window.setTimeout(function() {map.panTo(spain.getPosition());
    }, 3000);
});

google.maps.event.addListener(france,'click',function() {
   map.setZoom(16);
  map.setCenter(france.getPosition());
  window.setTimeout(function() {map.panTo(france.getPosition());
    }, 3000);
});

google.maps.event.addListener(france,'click',function() {
   map.setZoom(16);
  map.setCenter(croatia.getPosition());
  window.setTimeout(function() {map.panTo(france.getPosition());
    }, 3000);
});

google.maps.event.addListener(france,'click',function() {
   map.setZoom(16);
  map.setCenter(italy.getPosition());
  window.setTimeout(function() {map.panTo(france.getPosition());
    }, 3000);
});
 

google.maps.event.addListener(france,'click',function() {
   map.setZoom(16);
  map.setCenter(greece.getPosition());
  window.setTimeout(function() {map.panTo(france.getPosition());
    }, 3000);
});
}