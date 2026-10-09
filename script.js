// STEP 1: Find the elements on the page we want to work with

const button = document.getElementById("greet-btn");

// TODO 8: Find the paragraph with id "message" and store it in a variable

const message = document.getElementById("message");

// STEP 2: Write what should happen when the button is clicked

function showMessage() {

const time = new Date().toLocaleTimeString();

// TODO 9: Put this text inside the message paragraph:

// "Hello! This page is live. You clicked at " + time
message.textContent="hello! this page is live. You clicked at "+time;

}

// STEP 3: Connect the button click to the function

// TODO 10: When the button is clicked, run showMessage
button.addEventListener("click",showMessage);