function isBalanced(brackets) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of brackets) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[char]) {
                return 'NO';
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';
}

// Sample inputs
console.log(isBalanced("{ [ ( ) ] }")); // Output: YES
console.log(isBalanced("{ [ ( ] ) }")); // Output: NO
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")); // Output: YES
