# Codecademy- Shift Cipher
 Shift cipher with "wrap around" logic

This is my solution to this code challenge. The challenge instructions are as follows:

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

    encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
    decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
    
    In both methods, any character outside the alphabet should remain the same.
    
    If a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.


