// // input
// var username = prompt("Give me username!")
// // processing
// var welcomeMessage = "This script works !!"  +  username;
// // output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
console.log(txtInput);

function clickHandler() {

    console.log("input", txtInput.value);
  console.log("clicked!");

};

btnTranslate .addEventListener("click", clickHandler)
  