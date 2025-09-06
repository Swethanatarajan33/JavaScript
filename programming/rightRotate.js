let arr=[10,20,30,40,50,60]
let temp = arr[arr.length-1]/*
for(let i=arr.length-1 ; i>=0;i--)
{
    arr[i] =arr[i-1]
}
arr[0]=temp
console.log(arr);
*/
for(let i=arr.length-2 ; i>=0;i--)
{
    arr[i+1] =arr[i]
}
arr[0]=temp
console.log(arr);




 