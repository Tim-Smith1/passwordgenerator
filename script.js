// Assignment Code
var generateBtn = document.querySelector("#generate");

//My possible characters 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['!','@','#','$','%','&','*','(',')','-','_','+','='];

function generatePassword () {  
  var badLength = "Please select password length between 8 and 128 characters:";
  var userChoice = prompt (badLength);
  var numericChar = confirm ("Would you like a numeric character?");
  var upperCase = confirm ("Would you like a uppercase character?");
  var lowerCase = confirm ("How about a lower case letter?");
  var specialChar = confirm ("And finally a special character?");
  var possibleChars = [];
  var result = [];

//close the pop-up if user changes their mind and cancels 
  if (userChoice === null) {
      return;
//make sure the user enters a number between 8-128
  } else if (userChoice < 8 || userChoice > 128) {
//yell at the user if they don't pick a number between 8-128 and rerung the pop-up
      alert(badLength);
      generatePassword();
//
  } else if (!numericChar && !upperCase && !lowerCase && !specialChar){
      alert ("select atleast one character type!");
      generatePassword();
  } else {
  var userPassword = {
      length: userChoice,
      hasNumeric: numericChar,
      hasUpper: upperCase,
      hasLower: lowerCase,
      hasSpecial: specialChar
    }
console.log(userPassword);
  }

  // adding possibleChars = []; that stores below concatinations.
  
  if (userPassword.hasNumeric) {
    possibleChars = possibleChars.concat(numericCharacters);
  }

  if (userPassword.hasUpper) {
    possibleChars = possibleChars.concat(upperCaseletters);
  }

  if (userPassword.hasLower) {
    possibleChars = possibleChars.concat(lowerCaseletters);
  }

  if (userPassword.hasSpecial) {
    possibleChars = possibleChars.concat(specialCharacters);
  }
// userPassword.length determined by  userPassword = {
//                                    length: userChoice,
//
  for (var i = 0; i < userPassword.length; i++) {
    var randomNumber = Math.floor(Math.random() * possibleChars.length);
    result [i] = possibleChars[randomNumber]
  }
//result is triggered from the event listner 
var newPassword = result.join('');
return newPassword;


}

// Write password to the #password input
function writePassword() {
  //alert("working");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// console.log(userChoice);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


////Sam Adams TA pseudocode shared with us via slack.
////user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
    //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, gt 8 lt 129
    //then user is prompted password length 

    //if(passwordLength < 8){
      //alert('Password length must be at least 8 characters');
    //}
    
//then user confirms for password criteria
  //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  //var hasLower = confirm("Click OK to confirm including Lower characters.");
  //var hasUpper = confirm("Click OK to confirm including Upper characters.");
  //var hasSpecial = confirm("Click OK to confirm including Special characters.");

  //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type');
  //}

  //object to store user input
  //var userPassword = {
      //length: passwordLength,
      //hasNumeric: hasNumeric,
      //hasLower: hasLower,
      //hasUpper: hasUpper,
      //hasSpecial: hasSpecial,
  //}
  // return userPassword;

  //create another function to generate the password
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screen

//junkyard: not sure if i'll need this or not.

// function getOptions () {
//   var userChoice = prompt ("please select password length between 8 and 128 characters");
//   var numericChar = confirm ("numeric");
//   var upperCase = confirm ("upper");
//   var lowerCase = confirm ("lower case");
//   var specialChar = confirm ("special");
// } 