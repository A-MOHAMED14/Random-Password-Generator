// Assignment Code
var generateBtn = document.querySelector("#generate");

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

var randomPasswordArr = [];
var randomCharsArr = [];
var counter = 0;
var i = 0;

function generatePassword() {
  var passwordLength = prompt(
    "Please enter the desired password length. It must be between 8 and 128 characters inclusive."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
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

    while (counter < passwordLength) {
      if (includeLowercase === true) {
        var l = Math.floor(Math.random() * lowercaseChars.length);
        var randomLower = lowercaseChars[l];
        randomCharsArr.push(randomLower);
        counter++;
      }
      if (includeUppercase === true) {
        var u = Math.floor(Math.random() * uppercaseChars.length);
        var randomUpper = uppercaseChars[u];
        randomCharsArr.push(randomUpper);
        counter++;
      }
      if (includeNumeric === true) {
        var n = Math.floor(Math.random() * numberChars.length);
        var randomNumber = numberChars[n];
        randomCharsArr.push(randomNumber);
        counter++;
      }
      if (includeSpecial === true) {
        var s = Math.floor(Math.random() * specialChars.length);
        var randomSpecial = specialChars[s];
        randomCharsArr.push(randomSpecial);
        counter++;
      }
    }
    console.log(randomCharsArr, "<-------");

    while (i < passwordLength) {
      var x = Math.floor(Math.random() * randomCharsArr.length);
      var randomChar = randomCharsArr.splice(x, 1)[0];
      randomPasswordArr.push(randomChar);
      i++;
    }
    console.log(randomPasswordArr, "<<<<<<<<");

    var randomGeneratedPassword = randomPasswordArr.join("");
    console.log(randomGeneratedPassword, "**********");

    alert(`Your random generated password is: ${randomGeneratedPassword}🔑`);
    return randomGeneratedPassword;
  } else {
    alert("‼️ Password length must be between 8 and 128 characters.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
