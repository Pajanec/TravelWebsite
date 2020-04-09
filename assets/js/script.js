function initMap() {

  var granada = {lat: 37.173458 , lng: -3.598245};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: granada});
 
  var marker = new google.maps.Marker({position: granada, map: map});
}