// Assignment code here
var generateBtn = document.querySelector("#generate");


//Prompt for length of desired password and validate input.
function getPasswordLength(){
   var passwordLength = Number(prompt("Password Length is to be between 8-128 characters \n How long would you like your password?"));
   passwordLength = Math.floor(passwordLength);  // ensure it's a whole number
   if (!isValidPasswordLength(passwordLength)){
      alert ("Password must be between 8-128 characters")
      passwordLength = 0;
   }
   return passwordLength;
}


function isValidPasswordLength (num) {
   if (typeof num === 'number' && num >= 8 && num <= 128 ) {
      //console.log ("isValidNumber = true");
      return true;
   }
   else{
      //console.log("isValidNumber = false");
      return false;
   }
} // end of isValidPasswordLength


// Verify that the user selected at least one character type:
//  Upper-case letters, Lower-case letters, Special characters or Numbers.
function isValidCrit(isUpper, isLower, isSpecial, isNum){
   if (isUpper || isLower || isSpecial || isNum){
      // console.log("isValidCrit = true");
      return true;
   }
   else{
      // console.log("isValidCrit = false");
      return false
   }
} // end of isValidCrit

 
// Generate a random number between 0 and maxNum.  Ensure it's a whole number.
function randomNumber (maxNum){
   return Math.floor(Math.random() * maxNum);
}


// Generate a password of the requested length that contains at least one of each of the
// character types that the user selected.
function generatePassword(pwdLength, inclUpperCase, inclLowerCase, inclSpecChars, inclNums) {

   var validCharList= "";

   if (inclUpperCase) {
      validCharList = validCharList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
   if (inclLowerCase) {
      validCharList = validCharList + "abcdefghijklmnopqrstuvwxyz";
   }
   if (inclSpecChars) {
      validCharList = validCharList + "?></.,';:][|}{'+_)(*&^%$#@!=-";
   }
   if (inclNums) {
      validCharList = validCharList + "0123456789";
   }

   var generatedPassword;

   // Keep generating passwords and testing them until all the requirements are met.
   while(true) {
      generatedPassword = "";
      for (var i = 0; i < pwdLength; i += 1) {
         generatedPassword = generatedPassword + validCharList.charAt(randomNumber(validCharList.length));
         // console.log(generatedPassword);
      }
      if (isValidPassword(generatedPassword, inclUpperCase, inclLowerCase, inclSpecChars, inclNums)) {
         break;
      }
   }
   return generatedPassword;
}


// Ensure that at least one of each type of selected character is in the candidate password.
function isValidPassword(passwordCandidate, inclUpperCase, inclLowerCase, inclSpecChars, inclNums) {

   var isValid = true;

   if (inclUpperCase) {
      if (passwordCandidate.search(/[A-Z]/) < 0) {
         console.log("Candidate did not contain an upper-case letter.");
         isValid = false;
      }
   }
   if (inclLowerCase && isValid ) {
      if (passwordCandidate.search(/[a-z]/) < 0) {
         console.log("Candidate did not contain a lower-case letter.");
         isValid = false;
      }
   }
   if (inclSpecChars && isValid ) {
      if (passwordCandidate.search(/[^A-Za-z0-9]/) < 0) {
         console.log("Candidate did not contain a special character.");
         isValid = false;
      }
   }
   if (inclNums && isValid ) {
      if (passwordCandidate.search(/[0-9]/) < 0) {
         console.log("Candidate did not contain a number.");
         isValid = false;
      }
   }

   return isValid ;
}


// Collect all the user input and, if valid, generate the password.
function processRequest() {

   var passwordLength = getPasswordLength();
   if (passwordLength != 0) {
      var includeUpperCaseLetters = confirm ("Select OK for your password to contain uppercase letters.");
      var includeLowerCaseLetters = confirm ("Select OK for your password to contain lowercase letters.");
      var includeSpecialCharacters = confirm ("Select OK for your password to contain special characters.");
      var includeNumbers = confirm ("Select OK for your password to contain numbers.");

      // Verify that the user made at least one selection
      if ( !isValidCrit(includeUpperCaseLetters, includeLowerCaseLetters, includeSpecialCharacters, includeNumbers)) {
         alert("Your password must contain minimally \n an uppercase, lowercase, number or special character.");
      }
      else {
         var generatedPassword = generatePassword(passwordLength, includeUpperCaseLetters, includeLowerCaseLetters, includeSpecialCharacters, includeNumbers);
         // console.log(generatedPassword);
         document.getElementById('password').value = generatedPassword;
      }
   }
}

// Add event listener to generate button
generateBtn.addEventListener("click", processRequest);