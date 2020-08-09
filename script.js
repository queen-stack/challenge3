// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var isNumbers = false;
var isSpecialCharacters = false;
var isUpperCase = false;
var isLowerCase = false;
var isValidCrit = false;
var includeSpecialCharacters = "?></.,';:][|}{'+_)(*&^%$#@!=-)";
//var includeUpperCase = [A-Z];
//var includeLowerCase = [a-z];
var includeNumbers = [0-9];
//var password = generatePassword;
var mediumRegex = writePassword


// console.log (isNumbers)
// console.log(isUpperCase)
// console.log(isLowerCase)
// console.log(isSpecialCharacters)


//confirming data aka typeof
function checkTypeof(data){
  return typeof data ;
}

//return password length
function getPasswordLength(){

  
  //starter question
   passwordLength= prompt("Pasword Length is to be between 8-128 characters \n How long would you like your password?");
  
  if (passwordLength >= 8 && passwordLength<=128 ){
    isUpperCase = confirm ("Select OK for your password to contain uppercase letters");
    isLowerCase =confirm ("Select OK for your password to contain lowercase letters?");
    isSpecialCharacters = confirm ("Select OK for your password to contain special charaters");
    isNumbers = confirm ("Select OK for your password to contain numbers");
    console.log (isNumbers)
    console.log(isUpperCase)
    console.log(isLowerCase)
    console.log(isSpecialCharacters)
  }
else{
  alert ("Pasword must be between 8-128 characters")
}


} //get password length then confirm
function isValidNum (num) {
if (typeof num === 'number' && num >8 && num <= 128 ) {
//console.log ("true");
return true;
}
else{
  //console.log("false");
  return false;
}

}//stop output checker



//verify minimum criteria is true 
function isValidCrit(isNum, isSpecial, isUpper, isLower){
  if (isNum||isSpecial||isUpper||isLower){
   return true;
  }
     else{
       return false
     }
   }
  
   function randomNumber (){
     return Math.floor(Math.random() * 8);
   }
// Write password to input
function writePassword() {

  // passwordLength =getPasswordLength();
  // isSpecialCharacters =includeSpecialCharacters();
  // isUpperCase = includeUpperCase();
  // isLowerCase = includeLowerCase();
  // isNumbers = includeNumbers();

  if (isValidCrit(isSpecialCharacters, isUpperCase, isLowerCase, isNumbers)){
    var passwordText =document.querySelector("#password");

  }
  else{
    alert("Your password must contain minimally \n an uppercase, lowercase, number and special charater. ")
  }


  //RegEx	Description
//(?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
//(?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
//(?=.*[0-9])	The string must contain at least 1 numeric character
//(?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
//(?=.{8,})	The string must be eight characters or longer
  var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);