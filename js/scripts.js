$(document).ready(function() {
  $("#vacation").submit(function(event) {
    $("#skye").hide();
    $("#tuscany").hide();
    $("#buenos-aires").hide();
    $("#tokyo").hide();
    var total = parseInt($("select#weather").val());
      total += parseInt($("select#food").val());
      total += parseInt($("select#activity").val());
      total += parseInt($("select#music").val());
      total += parseInt($("select#movie").val());

      console.log(total);
  });

  event.preventDefault();
});
