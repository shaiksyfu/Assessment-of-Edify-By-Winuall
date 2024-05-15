// Function to check if a given string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Example usage
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false
  console.log(isPalindrome("level"));   // true