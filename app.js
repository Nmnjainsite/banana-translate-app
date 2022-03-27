// // input
// var username = prompt("Give me username!")
// // processing
// var welcomeMessage = "This script works !!"  +  username;
// // output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
console.log(txtInput);

var outputDiv = document.querySelector("output");

outputDiv.innerText = "Hello bro"

function clickHandler() {

    console.log("input", txtInput.value);
  console.log("clicked!");
  console.log("translated",txtInput.value)

};

btnTranslate .addEventListener("click", clickHandler)
  