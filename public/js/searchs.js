var cargarPagina = function () {
    $("#mostrar-result").click(datos);
};

function datos() {
    $.get("https://x-app-a4675.firebaseio.com/actividades.json", function(data, status){
        // console.log(busquedEdad(data));
        console.log(busquedEdad(data));

    });
}
function busquedEdad(event) {
    var activities = event;
    var dato1 =$("#select-edad").val();
    activities.forEach(function(event) {
        if(dato1==event.edad){
            mostrarEvent(event);
        }
    }, this);
}
function buscarCostos(event) {
    var activities = event;
    var dato1 =$("#select-precio").val();
    activities.forEach(function(event) {
        if(dato1<=event.costo){
            mostrarEvent(event);        }
    }, this);
}
function buscarLocalizacion(event) {
    var activities = event;
    var dato1 =$("#select-precio").val();
    var pos={lat: 19.4175899, lng: -99.1646999};
    
    activities.forEach(function(event) {
        
    }, this);    
}
function distancia() {
    
}
var plantillaEvent =
'<div class="key-reserva" data-key="__key__">'+
  '<div class="uk-card uk-card-default uk-card-hover">'+
    '<div class="uk-card-header">'+
        '<div class="uk-align-center">'+
            '<div class="uk-text-center uk-margin-bottom">'+
                '<img  width="140" height="140" src="__imagen__">'+
            '</div>'+
            '<div>'+
              '<h3 class="uk-card-title uk-margin-remove-bottom">__nombre__</h3>'+
              '<p class="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">__fecha__</p>'+
            '</div>'+
         '</div>'+
    '</div>'+
    '<div class="uk-card-body">'+
       ' <p>__descripcion__</p>'+
    '</div>'+
   '<div class="uk-card-footer">'+
        '<a class="boton-reserva" href="details.html" class="uk-button uk-button-text text-blue">Leer más</a>'+
    '</div>'+
  '</div>'+
'</div>';
var mostrarEvent = function (event) {
    var plantillaFinal2 = "";
            plantillaFinal2 += plantillaEvent.replace("__nombre__", event.nombre)
        .replace("__descripcion__", event.descripcion)
        .replace("__imagen__", event.imagen).replace("__fecha__",event.costo);

    $("#contenido_busqueda").html(plantillaFinal2);
};
$(document).ready(cargarPagina);