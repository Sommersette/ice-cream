$(document).ready(function(){
  var iceCreams = ['chocolate', 'vanilla', 'strawberry'];
  var iceCreamsString = iceCreams.join(', ');
    iceCreams.forEach(function(iceCream) {
      $(".favs").text(iceCreamsString);
    });
});
