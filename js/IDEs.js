$(document).ready(function(){
  
  $("#chart").click (function(){
      $("#indicadores").show();
      $("#grafico").show();
      $("#lineamientos").show();
      $("#fundamentales").show();
      $("#recursos").show();
      $("#titulo").show();
      $("#mapa").hide();
      $("#catalogo").hide();
      $("#estadoide").hide();
      $("#nodoside").hide();
      $("#pestañasglobe").hide();
  });

  $("#globe").click(function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#catalogo").hide();
    $("#estadoide").hide();
    $("#nodoside").hide();
    $("#titulo").hide();
    $("#mapa").show();
    $("#pestañasglobe").show();

  });

  $("#nodos").click (function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#mapa").hide();
    $("#pestañasglobe").hide();
    $("#catalogo").hide();
    $("#estadoide").hide();
    $("#titulo").hide();
    $("#nodoside").show();
  });

  $("#monitor").click (function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#nodoside").hide();
    $("#pestañasglobe").hide();
    $("#catalogo").hide();
    $("#titulo").hide();
    $("#estadoide").show();
  });

  $("#layer").click (function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#mapa").hide();
    $("#nodoside").hide();
    $("#estadoide").hide();
    $("#pestañasglobe").hide();
    $("#titulo").hide();
    $("#catalogo").show();
  });

  $("#botonidenacional").click (function(){
    $("#tabla1").show();
    $("#tabla2").hide();
  });

  $("#botonidesubnacional").click (function(){
    $("#tabla1").hide();
    $("#tabla2").show();
  });

  $("#botonlistadolac").click (function(){
    $("#botonidenacional").hide();
    $("#botonidesubnacional").hide();
    $("#tabla1").hide();
    $("#tabla2").hide();
    $("#tablalistadolac").show();
  });

  $("#botonidepais").click (function(){
    $("#botonidenacional").show();
    $("#botonidesubnacional").show();
    $("#tabla1").show();
    $("#tabla2").hide();
    $("#tablalistadolac").hide();
  });

});

$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
});

$("#botonidepais").click (function(){
  $("#botonidepais").addClass ("btn-dark");
  $("#botonlistadolac").removeClass ("btn-dark");
});

$("#botonlistadolac").click (function(){
  $("#botonlistadolac").addClass ("btn-dark");
  $("#botonidepais").removeClass ("btn-dark");
});



