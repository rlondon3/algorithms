class StringAlgorithms {
    // Check if all characters in the string are unique without additional data structures
    static hasUniqueChars(str) {
      for (let i = 0; i < str.length; i++) { // Iterates over the string
        for (let j = i + 1; j < str.length; j++) { // Iterates over string starting from the next index of i
          if (str[i] === str[j]) return false; // Checks if str[i] equals str[j] and returns false if they match
        }
      }
      return true; // Returns true if all characters are unique
    }
  
    // Check if all characters in the string are unique using a Set
    static hasUniqueCharsWithSet(str) {
      const charSet = new Set(); // Creates a Set for unique values only
      for (let char of str) { // Loops through each character in the string
        if (charSet.has(char)) return false; // Returns false if the character already exists
        charSet.add(char); // Adds the character to the Set if it doesn't exist
      }
      return true; // Returns true if all characters are unique
    }
  
    // Check if two strings are permutations of each other using sorting
    static arePermutationsBySorting(str1, str2) {
      if (str1.length !== str2.length) return false; // Checks if the strings have different lengths
      return str1.split("").sort().join("") === str2.split("").sort().join(""); // Sorts and joins strings, compares them
    }
  
    // Check if two strings are permutations of each other using character counts
    static arePermutationsByCount(str1, str2) {
      if (str1.length !== str2.length) return false; // Checks if lengths are not equal
  
      const charCount = {}; // Initializes a character count object
  
      for (let char of str1) { // Loops through each character in str1
        charCount[char] = (charCount[char] || 0) + 1; // Sets charCount[char] to 0 (+1) if undefined, or increments if defined
      }
  
      for (let char of str2) { // Loops through each character in str2
        if (!charCount[char]) return false; // Returns false if charCount[char] doesn't exist
        charCount[char]--; // Decrements charCount[char] if it exists
      }
  
      return true; // Returns true if str2 decrements exactly matching counts from str1
    }
  
    // Check if a string is a permutation of a palindrome
    static isPermutationOfPalindrome(str) {
      const charCount = {}; // Initializes a character count object
      const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, ''); // Cleans string to lowercase, removes non-letters
  
      for (let char of cleanedStr) { // Loops through cleanedStr to get each character
        charCount[char] = (charCount[char] || 0) + 1; // Increments count if defined, sets to 0 (+1) if undefined
      }
  
      let odd = 0; // Initializes odd variable to track characters with odd counts
      for (let count of Object.values(charCount)) { // Loops through the counts in charCount
        if (count % 2 !== 0) odd++; // Increments odd if count is not even
        if (odd > 1) return false; // Returns false if more than one character has an odd count
      }
  
      return true; // Returns true if the string can be a palindrome permutation
    }
  
    // Replace spaces in a string with '%20' up to a given 'true' length
    static urlify(str, length) {
      let urlified = ''; // Initializes urlified string
  
      for (let i = 0; i < length; i++) { // Loops through the string up to the specified length
        if (str[i] === ' ') { // Checks if the character at index i is a space
          urlified += '%20'; // Appends '%20' if a space is found
        } else {
          urlified += str[i]; // Otherwise, appends the character itself
        }
      }
  
      return urlified; // Returns the modified string
    }
  }
  
  module.exports = StringAlgorithms;