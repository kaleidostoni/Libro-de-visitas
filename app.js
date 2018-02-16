
//input (comentario)
var textInput = document.getElementById('input');

//funcion para pintar value del input en preview
function commentPreview() {
  var textInput = document.getElementById('input');
  var textInputValue = textInput.value;
  newComment(textInputValue);
  //console.log(textInputValue);
  //creando elementos
  var preview = document.getElementById('preview');
  //añadiendo estilos
  preview.innerText = textInputValue


  //funcion para dan funcionalidad al boton large
  var largeBtn = document.getElementById('large-btn')

  function large() {
    preview.style.fontSize = '80px';
  }
  largeBtn.onclick = large;

  //funcion para dan funcionalidad al boton medium
  var mediumBtn = document.getElementById('medium-btn')

  function medium() {
    preview.style.fontSize = '30px';
  }
  mediumBtn.onclick = medium;

  //funcion para dan funcionalidad al botón small
  var smallBtn = document.getElementById('small-btn')

  function small() {
    preview.style.fontSize = '10px';
  }
  smallBtn.onclick = small;

  //funcion para dan funcionalidad al botón text-color
  var textColorBtn = document.getElementById('text-btn')

  function textColor() {
    var promptColor = prompt('Escribe el color de tu texto')
    preview.style.color = promptColor;
  }
  textColorBtn.onclick = textColor;

  //funcion para dan funcionalidad al botón background-color
  var backgroundColorBtn = document.getElementById('background-btn')

  function backgroundColor() {
    var promptBackground = prompt('Escribe el color de tu fondo')
    preview.style.backgroundColor = promptBackground;
  }
  backgroundColorBtn.onclick = backgroundColor;

  //funcion para dan funcionalidad al botón left-align
  var leftBtn = document.getElementById('left-btn')

  function leftAling() {
    preview.style.textAlign = 'left';
  }
  leftBtn.onclick = leftAling;

  //funcion para dan funcionalidad al botón center-align
  var centerBtn = document.getElementById('center-btn')

  function centerAling() {
    preview.style.textAlign = 'center';
  }
  centerBtn.onclick = centerAling;

  //funcion para dan funcionalidad al botón center-align
  var rightBtn = document.getElementById('right-btn')

  function rightAling() {
    preview.style.textAlign = 'right';
  }
  rightBtn.onclick = rightAling;



  //añadiendo al HTML
  var previewContainer = document.getElementById('preview-section');
  previewContainer.appendChild(preview);
  //comment();
}
textInput.onkeyup = commentPreview;


