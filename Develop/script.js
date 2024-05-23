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

  var includeSpecial = confirm(
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

  // Generate random numbers between 0 and length of each array:
  // random number for lowercase characters
  var l = Math.floor(Math.random() * lowercaseChars.length);
  // random number for uppercase characters
  var u = Math.floor(Math.random() * uppercaseChars.length);
  // random number for number characters
  var n = Math.floor(Math.random() * numberChars.length);
  // random number for speacial characters
  var s = Math.floor(Math.random() * specialChars.length);

  // Random password that is generated
  var randomCharsArr = [];

  // Build the generatePassword function

  function generatePassword() {
    if (passwordLength >= 8 && passwordLength <= 128) {
      // Select random character using each character types random number
      if (includeLowercase === true) {
        var randomLower = lowercaseChars[l];
        randomCharsArr.push(randomLower);
      }
      if (includeUppercase === true) {
        var randomUpper = uppercaseChars[u];
        randomCharsArr.push(randomUpper);
      }
      if (includeNumeric === true) {
        var randomNumber = numberChars[n];
        randomCharsArr.push(randomNumber);
      }
      if (includeSpecial === true) {
        var randomSpecial = specialChars[s];
        randomCharsArr.push(randomSpecial);
        console.log(randomCharsArr, "********");
      }
    } else {
      alert("‼️ Password length must be between 8 and 128 characters.");
    }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
