"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const respose = document.getElementById("respose");

// create a mutable variable called age and do not assign it a value.
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    
    // Write your code below
    if (age < 18) {
        response.textContent = "You cannot vote and you cannot purchase alcohol.";
    } else if (age < 21) {
        response.textContent = "You can vote, but you cannot purchase alcohol.";
    } else {
        response.textContent = "You can vote and purchase alchol";
    }
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    // Note invalidCharacters
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
