$(document).ready(function(){
  //$('#text-input').keypress(preview);
  $('#preview-section').hide();
});

//función para agregar texto del textarea al preview
/*var preview = function(){
  var $text = $('#text-input').val();
  console.log($text);*/
  //creando contenedor
  //var $previewContainer = ('<div/>');
  //agregando el texto
  //$previewContainer.text($text);
}

//función para crear el contenedor del preview text
 $('#text-input').click(function(){
   $('#preview-section').show();
 });

//función para guardar el value del text area  y mostrarlo en el preview
 $('#text-input').keypress(function(){
   var $text = $('#text-input').val();
   console.log($text);
 });
