// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //if shift is incorrectly inputted return false 
    if (!shift || shift === 0 || shift < -25 || shift > 25 ){
      return false;
    }
    //if encode is false, shift numbers in opposite direction
    if (!encode) shift *= -1;

    //return the input only in lowercase
    let lowerCaseInput = input.toLowerCase();

    //store the final coded message
    let finalMessage = "";

    //loop thru the input 
    for(let text = 0; text < lowerCaseInput.length; text++){
      let letter = lowerCaseInput[text];

      //if the letter is in the alphebet using a regular expression for the lowercase alphabet 
      if (letter.match(/[a-z]/)) {

        //need to move the charcode of the character based on utf16 table
        //return an integer for each letter 
        let code = lowerCaseInput.charCodeAt(text) + shift;

        //if the letter code is more than 122 (z) then loop back around the alphabet 
        if (code > 122) {
          code = code - 26;
        }

        //if the letter code is less than 97 (a) then loop back around the alphabet 
        if (code < 97 ) {
          code = code + 26
        }
        
        //return a new letter from charcode 
        let newLetter = String.fromCharCode(code);
        finalMessage += newLetter;
      } else {
        finalMessage += letter;
      }
    }
    return finalMessage;


  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
