document.querySelector("#generate").addEventListener("click", writePassword);

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+","-", ".", "/", "<", ">", "?","~" ];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowerCase;
var confirmUpperCase;

var generatePassword = function() {
  var confirmLength = (prompt("How many characters would you like to have?"));

  while(confirmLength <= 8 || confirmLength >= 128) {
      window.alert("Password length must be between 8-128 characters please try again");
      var confirmLength = (prompt("How many characters would you like your password to have?"));
    } 

    var confirmNumericCharacter = confirm("Click Okay to confirm if you would like to include numeric characters");
    var confirmSpecialCharacter = confirm("Click Okay to confirm if you would like to include special characters");    
    var confirmLowerCase = confirm("Click Okay to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click Okay to confirm if you would like to include uppercase characters");
      
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        var confirmNumericCharacter = confirm("Click Okay to confirm if you would like to include numeric characters"); 
        var confirmSpecialCharacter = confirm("Click Okay to confirm if you would like to include special characters");   
        var confirmLowerCase = confirm("Click Okay to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click Okay to confirm if you would like to include uppercase characters");   
    } 

      var passwordCharacters = []
      
    if (confirmSpecialCharacter == true) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter == true) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase == true) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase == true) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

    var randomPassword = ""
      
    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", generatePassword);