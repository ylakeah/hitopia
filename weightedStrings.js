function weightedStrings(s, queries) {
    function getCharWeight(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    const weights = new Set();

    for (let i = 0; i < s.length; ) {
        const char = s[i];
        const charWeight = getCharWeight(char);

        let length = 0;
        for (let j = i; j < s.length && s[j] === char; j++) {
            length++;
            weights.add(charWeight * length);
        }

        i += length;
    }

    return queries.map(query => weights.has(query) ? 'Yes' : 'No');
}

// Sample input
const s = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(s, queries)); // Output: ["Yes", "Yes", "Yes", "No"]
