function isPalindrome(word)
    {
        // Initializing an empty string to store the reverse
        // of the original str
        let rev = "";
 
        // Initializing a new boolean variable for the
        // answer
        let booleanAns = false;
 
        for (let i = word.length - 1; i >= 0; i--){
            rev = rev + word.charAt(i);
            //adds the empty string to the reverse of each character
        }
 
        // Checking if both the strings are equal
        if (word === rev) {
            booleanAns = true;
        } else {
          booleanAns = false
        }
        return booleanAns
    }

/* 
  define the function
  use the if else statements
*/

/*
  IF the string is a palindrom, return true. IF it is not , return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
