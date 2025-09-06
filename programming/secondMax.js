let arr =[10,4,1,7,8,5]
let first_max =-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>first_max){
        second_max=first_max;
        first_max=arr[i];
    }
    else if(arr[i] >second_max && arr[i]!=first_max){
        second_max=arr[i]
    }
}
console.log(second_max);

//git
