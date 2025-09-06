let a=[1,1,0,1,0,0,1,0,1]
/*
for(let i=0;i<a.length;i++){
    for(let j=a.length-1;j>=0;j--){
        if(a[i]!=0 && a[j]!=1){
            let temp= a[i];
            a[i]=a[j];
            a[j]= temp;
            i++;
            j--;
        }
        else if(a[i]==0){
            a[j]
            i++
        }
        else if(a[j]==1){
            j--
        }
    }
}
console.log(a);
*/
/*
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length-1;j++){
        if(a[i]>a[j]){
            let temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log(a);
*/
let arr =[1,1,2,0,6,1,2,0,0,1,2,0,1,5]

let i=0;
let j=0;

while(j< arr.length){
    if(arr[j] !=0)
        j++;
    else{
        let t= arr[j]
        arr[j]=arr[i]
        arr[i]=t
        i++;
        j++;
    }
}console.log(arr);
console.log("it is odd",5 & 1);
console.log("t is even",4 & 1);

let num=10;
if((num &1 )==0){
    console.log("it is even");
}
else{
    console.log("ikt is odd");
    
}