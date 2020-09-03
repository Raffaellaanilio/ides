$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip();
  
  $("#chart").click (function(){
      $("#indicadores").show();
      $("#grafico").show();
      $("#lineamientos").show();
      $("#fundamentales").show();
      $("#recursos").show();
      $("#titulo").show();
      $("#contenedormapa").hide();
      $("#catalogo").hide();
      $("#estadoide").hide();
      $("#nodoside").hide();
      $("#pestañasglobe").hide();
      $("#mapaestadoide").hide();
      $("#infonodos").hide();
      $("#tituloestadoide").hide();
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
    $("#infonodos").hide();
    $("#mapaestadoide").hide();
    $("#tituloestadoide").hide();
    $("#contenedormapa").show();
    $("#pestañasglobe").show();

  });

  $("#nodos").click (function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#contenedormapa").hide();
    $("#pestañasglobe").hide();
    $("#catalogo").hide();
    $("#estadoide").hide();
    $("#titulo").hide();
    $("#mapaestadoide").hide();
    $("#tituloestadoide").hide();
    $("#nodoside").show();
    $("#infonodos").show();
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
    $("#infonodos").hide();
    $("#estadoide").show();
    $("#mapaestadoide").show();
    $("#tituloestadoide").show();

  });

  $("#layer").click (function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#contenedormapa").hide();
    $("#nodoside").hide();
    $("#estadoide").hide();
    $("#pestañasglobe").hide();
    $("#titulo").hide();
    $("#infonodos").hide();
    $("#mapaestadoide").hide();
    $("#tituloestadoide").hide();
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

$("#botonidepais").click (function(){
  $("#botonidepais").removeClass ("btn-dark");
  $("#botonidepais").addClass ("btn-basic");
  $("#botonlistadolac").addClass ("btn-dark");
});

$("#botonlistadolac").click (function(){
  $("#botonlistadolac").removeClass ("btn-dark");
  $("#botonlistadolac").addClass ("btn-basic");
  $("#botonidepais").addClass ("btn-dark");
});

$("#botonidenacional").click (function(){
  $("#botonidenacional").css('box-shadow', '4px 4px 4px #c3c4c6');
  $("#botonidesubnacional").css('box-shadow', 'none');
});

$("#botonidesubnacional").click (function(){
  $("#botonidesubnacional").css('box-shadow', '4px 4px 4px #c3c4c6');
  $("#botonidenacional").css('box-shadow', 'none');
});

$("#botonidepais").click (function(){
  $("#botonidesubnacional").css('box-shadow', 'none');
  $("#botonidenacional").css('box-shadow', '4px 4px 4px #c3c4c6');
});

});
