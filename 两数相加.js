/*
给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/ 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function cl(l1,arrs){
    arrs = arrs || [];
    arrs.push(l1.val);
    if(l1.next&&l1.next!=null){
       return cl(l1.next,arrs);
    }
    return arrs;
}
var addTwoNumbers = function(l1, l2) {
    let arrl1 = cl(l1).reverse();
    let arrl2 = cl(l2).reverse();
    let result = [];
    if(arrl1.length>arrl2.length){
        for(let i=0;i<arrl1.length;i++){
            if(arrl2[i]){
                if(arrl1[i]+arrl2[i]==10){
                    result.push(0);
                    result[i+1]+=1;
                }else{
                    result.push(arrl1[i]+arrl2[i]);
                }
            }else{
                result.push(arrl1[i]);
            }
            
        }
    }else if(arrl1.length<arrl2.length){
        for(let i=0;i<arrl2.length;i++){
            if(arrl1[i]){
                if(arrl1[i]+arrl2[i]==10){
                    result.push(0);
                    result[i+1]+=1;
                }else{
                    result.push(arrl1[i]+arrl2[i]);
                }
            }else{
                result.push(arrl2[i]);
            }
            
        }
    }else{
        for(let i=0;i<arrl2.length;i++){
            if(arrl1[i]+arrl2[i]==10){
                result.push(0);
                result[i+1]+=1;
            }else{
                result.push(arrl1[i]+arrl2[i]);
            }
        }
    }
    return result;
};
let l1s =  {
    val: 5
}
let l2s =  {
    val: 5
}


console.log(addTwoNumbers(l1s,l2s));