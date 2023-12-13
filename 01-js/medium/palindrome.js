/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}

function isPalindrome(str) {
  if (str.length == 1) return true;
  let l = 0;
  let r = str.length - 1;
  str = str.toLowerCase();
  while (l < r) {
    if (!isCharacterALetter(str.charAt(l))) {
      l++;
    } else if (!isCharacterALetter(str.charAt(r))) {
      r--;
    } else {
      if (str.charAt(l) !== str.charAt(r)) {
        return false;
      }
      l++;
      r--;
    }
  }
  return true;
}

module.exports = isPalindrome;
