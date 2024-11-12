const StringAlgorithms = require('./src/stringAlgorithms/StringAlgo');

// Test variables
const testString1 = "abcdef";
const testString2 = "abcdeff";
const testString3 = "Tact Coa";
const testString4 = "Mr John Smith    ";
const lengthForUrlify = 13;

// Test outputs
console.log("Testing hasUniqueChars:", StringAlgorithms.hasUniqueChars(testString1)); // true
console.log("Testing hasUniqueCharsWithSet:", StringAlgorithms.hasUniqueCharsWithSet(testString2)); // false
console.log("Testing arePermutationsBySorting:", StringAlgorithms.arePermutationsBySorting("abc", "cab")); // true
console.log("Testing arePermutationsByCount:", StringAlgorithms.arePermutationsByCount("abc", "bac")); // true
console.log("Testing isPermutationOfPalindrome:", StringAlgorithms.isPermutationOfPalindrome(testString3)); // true
console.log("Testing urlify:", StringAlgorithms.urlify(testString4, lengthForUrlify)); // "Mr%20John%20Smith"
