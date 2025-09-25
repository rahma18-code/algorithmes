/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    let result = "";
    
    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== currentChar) {
                return result;
            }
        }
        
        result += currentChar;
    }
    
    return result;
};

// Test
console.log(longestCommonPrefix(["flower","flow","flight"]));