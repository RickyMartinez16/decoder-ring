// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
      
  // write function to check for duplicate letters in alphabet input
      function checkForDuplicateLetters(alphabet){
        let duplicateLetters = [];
        // for (first; second; third)
        // for (initial value before loop; while this is true run everything in the for loop; after for loop do this)
        for(let letter = 0; letter < alphabet.length; letter++){
          let letterVal = alphabet[letter];
          if (duplicateLetters.indexOf(letterVal) !== -1){
            return true
          }
          duplicateLetters.push(letterVal);
        } 
        return false;
      };

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // alphabet is empty or the length of the alphabet does not equal 26 return false
    if(!alphabet || alphabet.length != 26 ){
      return false
    };
    
    // if alphabet does not contain any special characters return false
    // let alphabetWithSpecial = alphabet.match(specialChars);
    // if(!alphabetWithSpecial){
    //   return false
    // };

    // check for duplicate leters in alphabet input
    if (checkForDuplicateLetters(alphabet) === true) {
      return false;
    };


    //if we want to encode the message, use the given alphabet to return a new encoded message
    // make a new object that holds the alphabet as keys and encode alphabet as values {regular letter: encode letter}
    //encode = true
    //encode === true 
    if(encode === true){
      const encodeKey = {};
      for(let i = 0; i < alphabet.length; i++){
        const regularLetter = lowerCaseAlphabet[i];
        const encodeLetter = alphabet[i];
        encodeKey[regularLetter] = encodeLetter;
      }

      // use the encodekey object we just made to encode the input , leave spaces
      let message = "";
      for(let j = 0; j < input.length; j++){
        const inputChar = input[j];
        if(inputChar === " "){
          message += inputChar;
        } else {
          const encodedCharacter = encodeKey[inputChar];
          message += encodedCharacter;
        }
      }
      return message;
    };


    
    // if we want to decode the message, use the given alphabet to return a decoded message
    // make a new object that holds the decode alphabet as key and regular alphabet as value {decode letter: regular letter}
    if(encode === false){
      const decodeKey = {};
      for(let i = 0; i < alphabet.length; i++){
        const regularLetter = lowerCaseAlphabet[i];
        const decodeLetter = alphabet[i];
        decodeKey[decodeLetter] = regularLetter;
      }

      //use the decode key object to decode the input
      let message = "";
      for(let i = 0; i < input.length; i++){
        const inputChar = input[i];
        if(inputChar === " "){
          message += inputChar;
        } else {
          const decodedCharcter = decodeKey[inputChar];
          message += decodedCharcter;
        }
      }
      return message;
    };

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
