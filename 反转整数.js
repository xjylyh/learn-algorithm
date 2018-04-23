/*
给定一个 32 位有符号整数，将整数中的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
*/ 

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = x<0?"-":"";
    x = Math.abs(x).toString();
    let result = Number(flag+x.split("").reverse().join(""));
    if(result>Math.pow(2,31)-1 || result<Math.pow(-2,31)){
        return 0;
    }else{
        return result;
    }
};
console.log(reverse(1534236469));