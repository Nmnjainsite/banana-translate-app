// // input
// var username = prompt("Give me username!")
// // processing
// var welcomeMessage = "This script works !!"  +  username;
// // output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL (text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something went wrong ! please try later")
}


function clickHandler() {
// outputDiv.innerText = "ckhnsdkjvnj " + txtInput.value

var inputText = txtInput.value; 

// calling the server
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then (json=> {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
})
    .catch(errorHandler)
};

btnTranslate .addEventListener("click", clickHandler)
   
