<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXFEBKCMnxyk6FJ9X9c-649cu1K7c5JkY",
    authDomain: "todo-list-a9f5f.firebaseapp.com",
    databaseURL: "https://todo-list-a9f5f.firebaseio.com",
    projectId: "todo-list-a9f5f",
    storageBucket: "todo-list-a9f5f.appspot.com",
    messagingSenderId: "893025684489"
  };
  firebase.initializeApp(config);
</script>

var dataRaf = firebase.database();



// check off specific todos by click
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");

    // if($(this).css("color") ==="rgb(128, 128, 128)"){
// // turn to black
// $(this).css({
//     color: "black",
//     textDecoration: "none"
//     });
// }
// //els
// else{
// $(this).css({
// color: "gray",
// textDecoration: "line-through"
// });
// }
});
// click on X to delet Todo
$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500, function(){
  $(this).remove();
});    
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
  //grabbing new todo text from input 
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul   
  $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");  
}

});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle(); 
});