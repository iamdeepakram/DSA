// We will be using two pointers method to reverse an array 
/**
 * Given an array (or string), the task is to reverse the array/string.
 * Input  : arr[] = {1, 2, 3}
    Output : arr[] = {3, 2, 1}
    Input :  arr[] = {4, 5, 1, 2}
    Output : arr[] = {2, 1, 5, 4}
 */

// let arr = [1,2,3]
let arr = [4,5,1,2]
let start = 0;
let end = arr.length-1;

while(start<end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr);

