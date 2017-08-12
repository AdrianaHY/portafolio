
var cargarPagina = function(){
  menuResponsivo();
  typing();

};
var menuResponsivo = function() {
        $(document).delegate('.open', 'click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('body', 'click', function(event) {
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('.cls', 'click', function(event){
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });
    }
var typing= function(){

    $('#presentation').typeIt({
             strings: ["¡Hola! Soy Adriana","front-end developer", "diseñadora gráfica", "artista",
                        "música", "soñadora", "cantante"],
             speed: 50,
             breakLines: false,
             loop:true
    });
    $('#presentationMobile').typeIt({
             strings: ["¡Hola! Soy Adriana","front-end developer", "diseñadora gráfica", "artista",
                        "música", "soñadora", "cantante"],
             speed: 50,
             breakLines: false,
             loop:true
    });

    $('#tituloProyectosWeb').typeIt({
             strings: ["<proyectosWeb>", "programación"],
             speed: 50,
             breakLines: false,
             loop:true
    });

    $('#tituloProyectosMobile').typeIt({
             strings: ["<proyectosWeb>", "programación"],
             speed: 50,
             breakLines: false,
             loop:true
    });

}




$(document).ready(cargarPagina);
