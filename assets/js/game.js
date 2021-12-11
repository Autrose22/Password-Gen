document.querySelector("#generate").addEventListener("click",writePassword);

// Assignment code here
var special = '!@#$%^&*()+=-[]{}|:<>?,.';
var numbers = '1234567890';
var upper =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';

window.onload = alert("Hello! Please click 'Generate password' to get started!")

var confirmSpecialCharacter;
var confirmNumberCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
    var confirmLength = prompt("How many characters would you like your password to contain?");

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);