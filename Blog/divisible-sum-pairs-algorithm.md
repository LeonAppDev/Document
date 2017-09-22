---
title: Gap I found in a divisibleSum Pairs
---

## Job Description

You are given an array of n integers,a0,a1,...a(n-1), and a positive integer, k. Find and print the number of pairs where i<j and ai + aj is divisible by k.

## My Mind on how to solve this issue

1. Simplest way is to create two loops, one starts from 0 and index as i and the inner one starts with i+1, both of their indexes end with n-1, the problem is complexity will be O(n2)

2. So I think of another way, first find out all values divided by k and sum the value of the numbers have the same divided result, to make the work as simple, we use a array to create a mapping for this, if could think of this, the solution is halfway successfully. This is easy to implement in programming and hard to fail

3. The hardest part is how to calculate the sum according to sorting result, that is most diffcult issue, to make it easy to understand, I will describe it in Chinese

首先我犯的错误是想当然的认为除完以后为0的数值和除完以后为k-1的数值应该放在一起（大部分情况下都是这样），但很明显的在这道题目中不适用，因为Index还用来表示除完之后的余数，你要想到的是在这种情况下除完余数为0的是一种特殊情况，这样的数值可以自配对， 同时当k为偶数的时候如果余数为k/2也属于这种情况

另外一个很大的一个想当然的错误是认为a[i]和a[k-i]要取这两个数之间的最小值然后平方，其实应该很简单就是把这两个数值相乘就可以了，左边的数可以跟右边的数任意配对。


## Code

``` javascript

function divisibleSumPairs(n, k, ar) {

       var numbers=[];
       var i;
       var count=0;
       //Initialze a k space array with 0
       for(i=0;i<k;i++)
       {
         numbers[i]=0
       }
      //Set each element as the sum of division of k
       for(i=0;i<n;i++)
       {
         numbers[ar[i]%k]++;

       }

       var index=Math.ceil(k/2);
       count+= numbers[0]*(numbers[0]-1)/2
       for(i=1;i<index;i++)
       {
             count+=numbers[i]*numbers[k-i];
       }

       if(k%2==0)
       {
         count+=numbers[index]*(numbers[index]-1)/2;
       }

       return count;

}
```
