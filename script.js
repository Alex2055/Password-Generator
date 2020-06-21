// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // functions to get length and type of the password
  var length = lengthCheck();
  var types = typeCheck();

  //pass received values and generate password based on the conditions
  var password = generatePassword(length, types);


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//function to get the length of the password

var lengthCheck = function () {

  // loop to validate that the input lenth is 8-128 
  while (true) {
    var lengthinput = window.prompt("Please choose the password length from 8 to 128 characters");
    // convert string to int
    var length = parseInt(lengthinput);
    // check if the password size is correct

    if (length < 8) {
      window.alert("The password is too short. Please try again");
      continue;
    }
    if (length > 128) {
      window.alert("The password is too long. Please try again");
      continue;
    }

    // start all over if hit the enter without added number 
    if (!length) {
      window.alert("Invalid input. Please try again");
      continue;
    }



    return length;


  }
}

//function to get password types 

var typeCheck = function () {


  while (true) {

    // array will contain chosen type/types of characters for the password
    var passwordType = [];
    var ucCheck = window.confirm("Would you like to have uppercase letters in your password?");
    if (ucCheck) {

      //add to array if confirmed
      passwordType.push("QWERTYUIOPASDFGHJKLZXCVBNM");
    }

    var lcCheck = window.confirm("Would you like to have lowercase letters in your password?");
    if (lcCheck) {
      passwordType.push("qwertyuiopasdfghjklzxcvbnm");
    }

    var numCheck = window.confirm("Would you like to have numbers in your password?");
    if (numCheck) {
      passwordType.push("1234567890");
    }

    var scCheck = window.confirm("Would you like to have special characters in your password?");
    if (scCheck) {
      passwordType.push("!@#$%&*?><|}{+_-=`~;:");
    }


    //check if at least one charachter type was selected

    if (passwordType.length == 0) {
      window.alert("Please choose at least one type");
      continue;
    }
    return passwordType;
  }
}

// generate the password

var generatePassword = function (length, passwordType) {

  var password = "";

  // add chosen ammount of random characters to the var password
  for (var i = 0; i < length; i++) {

    // random index for the passwordType array
    var typeindex = Math.floor(Math.random() * (passwordType.length));

    //store random string of characters in the var
    var firstvalue = passwordType[typeindex];

    //random index for the firstvalue string
    var charindex = Math.floor(Math.random() * (firstvalue.length));

    //add random character from the string to the var
    password = password + firstvalue[charindex];



  }
  return password;
}




















