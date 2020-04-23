// Assignment Code:
var generateBtn = document.querySelector("#generate");

// Here we prompt and store a length of the password:
function getNumberOfCharacters() {
  var userInputOfLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters.",0);
  //check if password is long enough
  for (var i = 0; i < Infinity; i++) {
    if (isNaN(userInputOfLength) || userInputOfLength <8 || userInputOfLength >128) {
      var userInputOfLength = prompt("Please try again, choose a length of at least 8 characters and no more than 128 characters.");
    } else {
      console.log("password length:", userInputOfLength);
      return userInputOfLength;
      break;
    };
  };
};

// Here we confirm and store wich types of characters should be included in password:
function getKindsOfCharacters() {
  var specialCharactersString = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var lowercaseCharactersString = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharactersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharactersString = "012345678901234567890123456789";
  var stringOfChosenCharacters ='';
  var specialCharactersOption = confirm("Press OK, if you'd like to include special characters in the password.");
  if (specialCharactersOption == true) {
    stringOfChosenCharacters = specialCharactersString;
    console.log(stringOfChosenCharacters);
  }; 
  var lowercaseCharactersOption = confirm("Press OK, if you'd like to include lowercase in the password.");
  if (lowercaseCharactersOption == true) {
    stringOfChosenCharacters = stringOfChosenCharacters+lowercaseCharactersString;
    console.log(stringOfChosenCharacters);
  };
  var uppercaseCharactersOption = confirm("Press OK, if you'd like to include uppercase in the password.");
  if (uppercaseCharactersOption == true) {
    stringOfChosenCharacters = stringOfChosenCharacters + uppercaseCharactersString;
    console.log(stringOfChosenCharacters);
  };
  var numericCharactersOption = confirm("Press OK, if you'd like to include numbers in the password.");
  if (numericCharactersOption == true) {
    stringOfChosenCharacters = stringOfChosenCharacters + numericCharactersString;
    console.log(stringOfChosenCharacters);
  };
  //check if user choose at least one kind of character:
  if (!specialCharactersOption && !lowercaseCharactersOption && !uppercaseCharactersOption && !numericCharactersOption) {
    var userInputOfLength = alert("You did choose no one kind of character. Please refresh and try again.");
  } else {
    console.log("picked characters: ", stringOfChosenCharacters);
    return stringOfChosenCharacters;
  };
};

// Password generator function
function generatePassword() {
  var numberOfCharacters = getNumberOfCharacters();
  var pickedKindsOfCharacters = getKindsOfCharacters();
  var passwordItems = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    passwordItems = passwordItems + pickedKindsOfCharacters.charAt(Math.floor(Math.random() * Math.floor((pickedKindsOfCharacters.length) - 1)));
  }; 
    console.log("password: ", passwordItems);
    return passwordItems;
};

// Write password to the #password input:
function writePassword() {
  console.log ('writePassword invoked');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button:
generateBtn.addEventListener("click", writePassword);
