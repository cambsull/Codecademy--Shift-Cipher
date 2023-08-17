/*
Notes: the if/else statements in the encrypt and decrypt methods utilize modulo to ensure that the cipher "wraps around" the alphabet without going outside the boundaries of
unicode decimal representations (97 to 122 for lowercase letters, 65 to 90 for uppercase letters). The decrypt method adds an additional 26 prior to taking the modulo in order to
prevent a negative value ("overshooting" to the left in the alphabet).

The array can be directly applied to the String object via the handy apply() method, saving the need to convert the array to a string prior to returning the final result. Although
it is entirely possible to modify strings directly because of JavaScript's built-in string object capabilities, particularly large strings can be come computationally taxing
so an array was utilized this case.
*/

class ShiftCipher {
    constructor(shiftValue) {
      this.shiftValue = shiftValue;
    }
  
    encrypt(stringToEncrypt) {
      let charArray = [];
  
      for (let i = 0; i < stringToEncrypt.length; i++) {
        let charCode = stringToEncrypt.charCodeAt(i);
  
        if (97 <= charCode && charCode <= 122) {  // Lowercase letters
          charArray.push(((charCode - 97 + this.shiftValue) % 26) + 97);
        } else if (65 <= charCode && charCode <= 90) {  // Uppercase letters
          charArray.push(((charCode - 65 + this.shiftValue) % 26) + 65);
        } else {
          charArray.push(charCode);  // Keep non-alphabet characters unchanged
        }
      }
  
      return String.fromCharCode.apply(String, charArray).toUpperCase();
    }
  
    decrypt(stringToDecrypt) {
      let charArray = [];
  
      for (let i = 0; i < stringToDecrypt.length; i++) {
        let charCode = stringToDecrypt.charCodeAt(i);
  
        if (97 <= charCode && charCode <= 122) {  // Lowercase letters
          charArray.push(((charCode - 97 - this.shiftValue) + 26) % 26 + 97);
        } else if (65 <= charCode && charCode <= 90) {  // Uppercase letters
          charArray.push(((charCode - 65 - this.shiftValue) + 26) % 26 + 65);
        } else {
          charArray.push(charCode);  // Keep non-alphabet characters unchanged
        }
      }
  
      return String.fromCharCode.apply(String, charArray).toLowerCase();
    }
  }
  
  const myCipher = new ShiftCipher(2);
  console.log(myCipher.decrypt('K <3 OA RWRRA')); // Will return "i <3 my puppy"