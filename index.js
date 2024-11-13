// Import StringAlgorithms class
const StringAlgorithms = require('./src/stringAlgorithms/StringAlgo');

// Test variables
const testString1 = 'abcdef';
const testString2 = 'abcdeff';
const testString3 = 'Tact Coa';
const testString4 = 'Mr John Smith    ';
const lengthForUrlify = 13;
const testString5 = 'aabcccccaaa';
const oneEditString1 = 'pale';
const oneEditString2 = 'ple';
const oneEditString3 = 'bake';

// Test outputs
console.log(
	'Testing hasUniqueChars:',
	StringAlgorithms.hasUniqueChars(testString1)
); // true
console.log(
	'Testing hasUniqueCharsWithSet:',
	StringAlgorithms.hasUniqueCharsWithSet(testString2)
); // false
console.log(
	'Testing arePermutationsBySorting:',
	StringAlgorithms.arePermutationsBySorting('abc', 'cab')
); // true
console.log(
	'Testing arePermutationsByCount:',
	StringAlgorithms.arePermutationsByCount('abc', 'bac')
); // true
console.log(
	'Testing isPermutationOfPalindrome:',
	StringAlgorithms.isPermutationOfPalindrome(testString3)
); // true
console.log(
	'Testing urlify:',
	StringAlgorithms.urlify(testString4, lengthForUrlify)
); // "Mr%20John%20Smith"
console.log(
	'Testing isOneEditAway (should be true):',
	StringAlgorithms.oneEditAway(oneEditString1, oneEditString2)
); // true
console.log(
	'Testing isOneEditAway (should be false):',
	StringAlgorithms.oneEditAway(oneEditString1, oneEditString3)
); // false
console.log(
	'Testing compressString:',
	StringAlgorithms.compressedString(testString5)
); // "a2b1c5a3"
