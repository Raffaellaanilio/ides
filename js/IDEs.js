$('[data-toggle="tooltip"]').tooltip();

$(document).ready(function(){
  $("#contenedormapa").hide();
  $("#mapaestadoide").hide();

  $("#chart").css('background', '#989A99');

  $('[data-toggle="tooltip"]').tooltip();
  
  $("#chart").click (function(){
      $("#indicadores").show();
      $("#grafico").show();
      $("#lineamientos").show();
      $("#fundamentales").show();
      $("#recursos").show();
      $("#titulo").show();
      $("#contenedormapa").hide();
      $("#catalogofiltro").hide();
      $("#estadoide").hide();
      $("#nodoside").hide();
      $("#pestañasglobe").hide();
      $("#mapaestadoide").hide();
      $("#infonodos").hide();
      $("#tituloestadoide").hide();
      $("#catalogoresultados").hide();
      $("#chart").css('background', '#989A99');
      $("#globe").css('background', 'none');
      $("#layer").css('background', 'none');
      $("#nodos").css('background', 'none');
      $("#monitor").css('background', 'none');
  });

  $("#globe").click(function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#catalogofiltro").hide();
    $("#estadoide").hide();
    $("#nodoside").hide();
    $("#titulo").hide();
    $("#infonodos").hide();
    $("#mapaestadoide").hide();
    $("#tituloestadoide").hide();
    $("#catalogoresultados").hide();
    $("#contenedormapa").show();
    $("#pestañasglobe").show();
    $("#chart").css('background', 'none');
    $("#layer").css('background', 'none');
    $("#nodos").css('background', 'none');
    $("#monitor").css('background', 'none');
    $("#globe").css('background', '#989A99');

  });

  $("#nodos").click (function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#contenedormapa").hide();
    $("#pestañasglobe").hide();
    $("#catalogofiltro").hide();
    $("#estadoide").hide();
    $("#titulo").hide();
    $("#mapaestadoide").hide();
    $("#tituloestadoide").hide();
    $("#catalogoresultados").hide();
    $("#nodoside").show();
    $("#infonodos").show();
    $("#chart").css('background', 'none');
    $("#globe").css('background', 'none');
    $("#layer").css('background', 'none');
    $("#monitor").css('background', 'none');
    $("#nodos").css('background', '#989A99');
  });

  $("#monitor").click (function(){
    $("#indicadores").hide();
    $("#grafico").hide();
    $("#lineamientos").hide();
    $("#fundamentales").hide();
    $("#recursos").hide();
    $("#nodoside").hide();
    $("#pestañasglobe").hide();
    $("#catalogofiltro").hide();
    $("#titulo").hide();
    $("#infonodos").hide();
    $("#contenedormapa").hide();
    $("#catalogoresultados").hide();
    $("#estadoide").show();
    $("#mapaestadoide").show();
    $("#tituloestadoide").show();
    $("#chart").css('background', 'none');
    $("#globe").css('background', 'none');
    $("#nodos").css('background', 'none');
    $("#layer").css('background', 'none');
    $("#monitor").css('background', '#989A99');

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
    $("#catalogofiltro").show();
    $("#catalogoresultados").show();
    $("#chart").css('background', 'none');
    $("#globe").css('background', 'none');
    $("#nodos").css('background', 'none');
    $("#monitor").css('background', 'none');
    $("#layer").css('background', '#989A99');
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

$("#globe").click(function(){
  $("#botonidenacional").css('box-shadow', '4px 4px 4px #c3c4c6');
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



/*
$("#monitor").mouseover(function(){
    $("#monitor").css('background-color','#989A99');
    $("#monitor").css('padding','21px 21px');
  });
  $("#monitor").mouseout(function(){
    $("#monitor").css('background-color','#636564');
    $("#monitor").css('padding','19px 19px');
  });

  $("#globe").mouseover(function(){
    $("#globe").css('background-color','#989A99');
    $("#globe").css('padding','21px 21px');
  });
  $("#globe").mouseout(function(){
    $("#globe").css('background-color','#636564');
    $("#globe").css('padding','19px 19px');
  });

  $("#nodos").mouseover(function(){
    $("#nodos").css('background-color','#989A99');
    $("#nodos").css('padding','21px 21px');
  });
  $("#nodos").mouseout(function(){
    $("#nodos").css('background-color','#636564');
    $("#nodos").css('padding','19px 19px');
  });

  $("#layer").mouseover(function(){
    $("#layer").css('background-color','#989A99');
    $("#layer").css('padding','21px 21px');
  });
  $("#layer").mouseout(function(){
    $("#layer").css('background-color','#636564');
    $("#layer").css('padding','19px 19px');
  });

  $("#chart").mouseover(function(){
    $("#chart").css('background-color','#989A99');
    $("#chart").css('padding','21px 21px');
  });
  $("#chart").mouseout(function(){
    $("#chart").css('background-color','#636564');
    $("#chart").css('padding','19px 19px');
  });
   */