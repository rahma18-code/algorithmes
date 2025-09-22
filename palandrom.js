/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversedHalf = 0;
    let original = x;
    
     while (original > reversedHalf) {
        reversedHalf = reversedHalf * 10 + original % 10;
        original = Math.floor(original / 10);
    }
    
      return original === reversedHalf || original === Math.floor(reversedHalf / 10);
};

 
console.log(isPalindrome(121));     
console.log(isPalindrome(-121));    
console.log(isPalindrome(10));     
console.log(isPalindrome(0));      
console.log(isPalindrome(12321));   