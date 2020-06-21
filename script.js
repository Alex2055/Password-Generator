// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create an object to storage input data
var passwordLength = 0;
var passwordType = [];
// var lowercase = "";
// var uppercase = "";
// var numeric = "";
// var specialchar = "";

//function to get the length of the password

var lengthCheck = function () {
  var lengthinput = window.prompt("Please choose the password length from 8 to 128 characters");
  // convert string to int
  var length = parseInt(lengthinput);
  // check if the password size is correct
  if (length < 8) {
    window.alert("The password is too short. Please try again");
    lengthCheck();
  }
  if (length > 128) {
    window.alert("The password is too long. Please try again");
    lengthCheck();
  }
  if (length === "" && length === null) {
    window.alert("Invalid input. Please try again");
    lengthCheck();
  }
  // if (!isNaN(length)) {
  //   window.alert("Length can only be a number");
  //   lengthCheck();
  // }

  else {
    passwordLength = length;
  }

  console.log(passwordLength)
  console.log(typeof passwordLength)

}

//function to get password types 

var typeCheck = function () {

  var ucCheck = window.confirm("Would you like to have uppercase letters in your password?");
  passwordType[0] = ucCheck;

  var lcCheck = window.confirm("Would you like to have lowercase letters in your password?");
  passwordType[1] = lcCheck;


  var numCheck = window.confirm("Would you like to have numbers in your password?");
  passwordType[2] = numCheck;

  var scCheck = window.confirm("Would you like to have special characters in your password?");
  passwordType[3] = scCheck;

  console.log(passwordType[0]);
  console.log(passwordType[1]);
  console.log(passwordType[2]);
  console.log(passwordType[3]);

  //check if at least one charachter type selected

  if (lcCheck == false && ucCheck == false && numCheck == false && scCheck == false) {
    window.alert("Please choose at least one type");
    typeCheck();
  }

}

// generate password

var genPass = function () {

  // random array value
  var value = Math.floor(Math.random() * Math.floor(passwordType.length));
  console.log(value);
  console.log(typeof value);


}



lengthCheck();
typeCheck();
genPass();













// var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  // var lower = "qwertyuiopasdfghjklzxcvbnm";
  // var numb = "1234567890";
  // var schar = "!@#$%&*?><|}{+_-=`~;:";
  // var passcomb = "";

  //create the string with the combination of chosen characters 

  // if (passwordType[0]) {
  //   passcomb = passcomb + upper;
  // }
  // if (passwordType[1]) {
  //   passcomb = passcomb + lower;
  // }
  // if (passwordType[2]) {
  //   passcomb = passcomb + numb
  // }
  // if (passwordType[3]) {
  //   passcomb = passcomb + schar;
  // }



