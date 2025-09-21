function twoSum(nums,target){
for(let i=0 ;i< nums.length;i++){
    for(let j = i+1;j< nums.length;j++){
    if(nums[i]+nums[j]===target){
         return[i,j];
    }
}
}
console.log("there is no 2 number we can add to reach the target");
return[];
}


function twoSum(nums,target){
    let map ={};

 for(let i= 0;i<nums.length;i++){
 
        let complement=target-nums[i];
     if(map.has(complement)){
        return[map.get(complement),i];
     }
    map.set(nums[i],i);

 }
 
return[]
}
  