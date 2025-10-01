/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) { 
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
};
 

console.log("Test 1 - Filter values greater than 10:");
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function(n) { return n > 10; };
console.log("Input:", arr1);
console.log("Output:", filter(arr1, greaterThan10));
console.log("Expected: [20, 30]");
console.log("Pass:", JSON.stringify(filter(arr1, greaterThan10)) === JSON.stringify([20, 30]));
console.log();
 

console.log("Test 2 - Filter first index:");
const arr2 = [1, 2, 3];
const firstIndex = function(n, i) { return i === 0; };
console.log("Input:", arr2);
console.log("Output:", filter(arr2, firstIndex));
console.log("Expected: [1]");
console.log("Pass:", JSON.stringify(filter(arr2, firstIndex)) === JSON.stringify([1]));
console.log();

 

console.log("Test 3 - Filter truthy values after plusOne:");
const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function(n) { return n + 1; };
console.log("Input:", arr3);
console.log("Output:", filter(arr3, plusOne));
console.log("Expected: [-2, 0, 1, 2]");
console.log("Pass:", JSON.stringify(filter(arr3, plusOne)) === JSON.stringify([-2, 0, 1, 2]));
console.log();
 


console.log("Test 4 - Empty array:");
const arr4 = [];
const alwaysTrue = function(n) { return true; };
console.log("Input:", arr4);
console.log("Output:", filter(arr4, alwaysTrue));
console.log("Expected: []");
console.log("Pass:", JSON.stringify(filter(arr4, alwaysTrue)) === JSON.stringify([]));
console.log();
 



console.log("Test 5 - Filter even numbers:");
const arr5 = [1, 2, 3, 4, 5, 6];
const isEven = function(n) { return n % 2 === 0; };
console.log("Input:", arr5);
console.log("Output:", filter(arr5, isEven));
console.log("Expected: [2, 4, 6]");
console.log("Pass:", JSON.stringify(filter(arr5, isEven)) === JSON.stringify([2, 4, 6]));
console.log();
 