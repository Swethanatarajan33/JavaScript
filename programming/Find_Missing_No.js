let a=[1,2,3,4,6]
let n=6;
/*for(let i=0;i<n;i++){
    if(a[i]==i){
        continue;
    }
    
    else{
        console.log(i);
        
    }    
}*/
let expectedSum =(n*(n+1))/2
//console.log(exceptedSum);

let sum=0
for(let i=0;i<a.length;i++){
    sum=sum +a[i]
}
let missingNumber = expectedSum - sum
console.log(missingNumber);

//===================================
let xor1=0
for(let i=0;i<a.length;i++){
    xor1 =xor1 ^ i
}
console.log(xor1);

