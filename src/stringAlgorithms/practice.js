const uniqueChar = (str1) => {
	for (let i = 0; i < str1.length; i++) {
		for (let j = i + 1; j < str1.length; i++) {
			if (str1[i] === str1[j]) return false;
		}
	}
	return true;
};

const uniqueCharDS = (str) => {
	const charSet = new Set();
	for (let char of str) {
		if (charSet.has(char)) return false;
		charSet.add(char);
	}
	return true;
};

const permutation = (str1, str2) => {
	if (str1.length !== str2) return false;
	return str1.split('').sort().join('') === str2.split('').sort().join('');
};

const permutationByCount = (str1, str2) => {
	let charCount = {};

	for (let char of str1) {
		charCount = (charCount[char] || 0) + 1;
	}

	for (let char of str2) {
		if (!charCount[char]) return false;
		charCount[char]--;
	}
	return true;
};

const palindrome = (str1, str2) => {};

const urlify = (str, length) => {
	let url = '';
	for (let i = 0; i < length; i++) {
		if (str[i] === ' ') {
			url += '%20';
		} else {
			url += str[i];
		}
	}
	return url;
};
