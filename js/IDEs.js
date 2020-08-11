$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   

    $("#globe").on("click", function(){
      $("#indicadores").hide();

      $("#chart").on("click", function(){
        $("#indicadores").show();
      });
    });
});