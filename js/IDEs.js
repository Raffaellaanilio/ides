$(document).ready(function(){
  $("#globe").click(function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
  });
  
  $("#chart").click (function(){
      $("#indicadores").show();
      $("#grafico").show();
      $("#lineamientos").show();
      $("#fundamentales").show();
      $("#recursos").show();
  });
});

$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
});