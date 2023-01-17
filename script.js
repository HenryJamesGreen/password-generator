// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

let userOptions = [
  specialCharacters,
  upperCasedCharacters,
  lowerCasedCharacters,
  numericCharacters,
];

let passwordchoices = [];
let passwordLength = [];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(prompt("Please specify password length 10-64"));

  if (passwordLength >= 10 && passwordLength <= 64) {
    passwordchoices.push(passwordLength);
    let userTellSpec = confirm("Would you like to use special characters?");
    if (userTellSpec === true) {
      passwordchoices.push(specialCharacters);
    }
    let userTellUp = confirm("Would you like to use upper case characters?");
    if (userTellUp === true) {
      passwordchoices.push(upperCasedCharacters);
    }
    let userTellDo = confirm("Would you like to use lower case characters?");
    if (userTellDo === true) {
      passwordchoices.push(lowerCasedCharacters);
    }
    let userTellNum = confirm("Would you like to use numeric characters?");
    if (userTellNum === true) {
      passwordchoices.push(numericCharacters);
    }
  } else alert("try again");

  return userOptions;
}

getPasswordOptions();
console.log(passwordchoices[0]);
console.log(passwordchoices);

let charCount = passwordchoices[0];
console.log(charCount);

let choice1 = passwordchoices[1];
let choice2 = passwordchoices[2];
let choice3 = passwordchoices[3];
let choice4 = passwordchoices[4];
let joinedArray = choice1.concat(choice2, choice3, choice4);

console.log(joinedArray);
let finalCharacterChoice = joinedArray.filter(function (element) {
  return element !== undefined;
});
console.log(finalCharacterChoice);

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * finalCharacterChoice.length)];
}

console.log(getRandom(finalCharacterChoice));

// Function to generate password with user input

function generatePassword() {
  for (i = 0; i < charCount; i++) {
    password += getRandom(finalCharacterChoice);
  }
  return password;
}

let password = []
generatePassword();
console.log(password);

//console.log(passwordPre);

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
