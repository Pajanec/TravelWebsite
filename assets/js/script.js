function initMap() {
 
  var europe = {lat: 48.270611, lng:9.243381};
  var lucerne ={lat: 47.050321, lng:8.307818};
  var granada ={lat: 37.173484, lng:-3.598352};
  var arles ={lat: 43.676355, lng:4.624997};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {
          zoom: 4, 
          center: europe,
        disableDefaultUI: true
    });
  

  var marker = new google.maps.Marker({position: lucerne, map: map  });
  var spain= new google.maps.Marker({position: granada, map: map  });
  var france = new google.maps.Marker({position: arles, map: map });


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
}