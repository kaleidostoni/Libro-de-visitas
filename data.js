var database = [
    {
      content: "bienvenidos",
      style: {
        fontSize: "20px",
        color: "#DADA3B"
      }
    },
    {
      content: "HOLA",
      style: {
        fontSize: "20px",
        color: "#24DA3B"
      }
    }
   
   ];
   
   //Función para recorrer la data
   var commentsContainer = document.getElementById('comment-section');
   
   function iterateData(){
    for(var i = 0; i<database.length; i++){
      //var data = database[i];
     var allData = printData(database[i]);
      commentsContainer.appendChild(allData);
    }
   };
   iterateData();
   
   //función para crear el contenedor y pintar la data
   
  function printData(data){
    //commentsContainer.innerHTML =" ";
    for(var i = 0; i<database.length; i++){
    var contentCommentText = database[i].content;
    var finalComment = document.createElement('section');
    finalComment.innerHTML = contentCommentText;
    //commentsContainer.appendChild(finalComment); ----->ojo
      //commentStyles(finalComment);
      }return finalComment;
   };
   
   //función para poner los estilos en los Comentarios
   
   //function commentStyles(finalComment){
   
   //};
   
   //función para crear un objeto(commentario)
   
   function newComment(){
    var contentPreview =  preview.innerText;
    //console.log(contentPreview);
    var newCommentObject = {
      content:null,
      style:{}
    };
    newCommentObject.content = contentPreview;
    //console.log(newCommentObject);
    database.unshift(newCommentObject);
    //console.log(contentPreview);
    printData();
   };
   
   
   var sendBtn = document.getElementById('comment-btn');
   sendBtn.addEventListener('click', newComment);
   /*
   //función para asignar contenido al objeto(content)
   function commentContent(newCommentObject, $commentView){
      newCommentObject.content =
   
   }
   
   
   */
  
   