// check off specific todos by click
$("li").click(function(){
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