function  initMap() {
    var lucerne = {lat: 47.050420 , lng: 8.307689};
    var map= new google.maps.Map(
        document.getElementById("map2"), { zoom:17, center: lucerne});
    var marker= new google.maps.Marker ({position: lucerne, map: map});
    
}

function initMap() {
    var granada = {lat: 37.173458 , lng: -3.598245};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: granada});
 
  var marker = new google.maps.Marker({position: granada, map: map});
}
