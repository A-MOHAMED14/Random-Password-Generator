// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Series of prompts for password criteria
  var passwordLength = prompt(
    "Please enter the desired password length. It must be between 8 and 128 characters inclusive."
  );

  var includeLowercase = confirm(
    "Include lowercase characters? OK for yes, Cancel for no."
  );

  var includeUppercase = confirm(
    "Include uppercase characters? OK for yes, Cancel for no."
  );

  var includeNumeric = confirm(
    "Include numeric characters? OK for yes, Cancel for no."
  );

  var includeSpecialCharacters = confirm(
    "Include special characters? OK for yes, Cancel for no."
  );

  // All possible characters to generate password stored in arrays
  var lowercaseChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var uppercaseChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var specialChars = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
