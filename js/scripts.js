$(document).ready(function() {
  $("#vacation").submit(function(event) {
    $("#skye").hide();
    $("#tuscany").hide();
    $("#buenos-aires").hide();
    $("#tokyo").hide();
    
  });

  event.preventDefault();
});
