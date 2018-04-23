/*
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/ 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target,index) {
    let iscatch = nums.shift();
    index = index || 0;
    for(let i=0;i<nums.length;i++){
        if(iscatch+nums[i]==target){
            console.log(nums,iscatch,index,i,[index,i+index+1]);
            return [index,i+index+1];
        }
    }
    return twoSum(nums,target,++index);
 };
 console.log(twoSum([2, 7, 11, 15],26));
 //通过，不过不知道这样的算法好不好