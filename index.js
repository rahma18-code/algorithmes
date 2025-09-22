function twoSum(nums, target) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(complement in map) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    
    console.log("There are no two numbers that add up to the target");
    return [];
}

console.log("Brute Force Version:");
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]