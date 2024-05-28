function highestPalindrome(str, k) {
    let chars = str.split(''); 

    for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
        if (chars[i] !== chars[j]) {
            chars[i] = chars[j] = Math.max(chars[i], chars[j]); // biggest
            k--; // One replacement used
        }
    }


    for (let i = 0, j = chars.length - 1; i <= j && k > 0; i++, j--) {
        if (i === j) {
            if (k > 0) chars[i] = '9'; // For odd strings, update middle digit
        } else if (chars[i] !== '9' && k >= 2) {
            chars[i] = chars[j] = '9';
            k -= 2; // Two replacements used
        } else if (chars[i] !== '9' || chars[j] !== '9') {
            chars[i] = chars[j] = '9';
            k--; // One replacement used
        }
    }

    const result = chars.join(''); 

    return k >= 0 ? result : -1; 
}

// Example usage
console.log(highestPalindrome("3943", 1)); // Output: 3993
console.log(highestPalindrome("932239", 2)); // Output: 992299
console.log(highestPalindrome("123", 1)); // Output: 323
console.log(highestPalindrome("1234", 1)); // Output: -1
