// Assignment code here

 
  // While the user has given an invalid response ask again
  function generatePassword() { 
  var passwordLength = 
    prompt("Your password must be between 8-128 characters; \n How long would you like it to be?");
  console.log(passwordLength);


  //Possible password values
  /* Function to generate combination of password */ 

    var pass = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
      
   var i = 0;
      while (i < 128) {
      console.log(i);
      i = i++;
 }
   

  // While the user has not selected at least one character category ask again
  var useNumbers = confirm("Would you like numbers in your password?");
  console.log(useNumbers);

  // for the number of characters the user requests, add a new random character to the password
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