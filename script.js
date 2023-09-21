/* Iteration 4: Make Everything Work */
 //Harry Potter - background, face, scarf1, scarf2, hair, text
var buttonbackground =document.getElementById("buttonbackground");
var background =document.getElementById("background");
buttonbackground.oninput =() => {
    // console.log("MY color input is working");
background.style.fill=buttonbackground.value;
}
var face=document.getElementById("face");
var bface=document.getElementById("bface");
bface.oninput =() => {
    //console.log("My color input is working");
face.style.fill=bface.value;    
}
var scarf1=document.getElementById("scarf1");
var bscarf1=document.getElementById("bscarf1");
bscarf1.oninput =() => {
    //console.log"My color input is working");
scarf1.style.fill=bscarf1.value;    
}
var scarf2=document.getElementById("scarf2");
var bscarf2=document.getElementById("bscarf2");
bscarf2.oninput =() => {
     //console.log"My color input is working");
scarf2.style.fill=bscarf2.value;  
}
var hair=document.getElementById("hair");
var bhair=document.getElementById("bhair");
bhair.oninput =() => {
    //console.log"My color input is working");
hair.style.fill=bhair.value;    
}
var text=document.getElementById("text");
var btext=document.getElementById("btext");
btext.oninput =() => {
    //console.log"My color input is working");
text.style.fill=btext.value;    
}