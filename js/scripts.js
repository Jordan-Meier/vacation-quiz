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

      if (total >= 27) {
        $("#buenos-aires").show();
      } else if (total >= 21 && <=26) {
        $("#tokyo").show();
      } else if (total >=15 && <=20) {
        $("#tuscany").show();
      } else {
        $("#skye").show();
      }
  });

  event.preventDefault();
});
