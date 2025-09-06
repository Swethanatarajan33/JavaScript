let a=[1,1,0,0,1,0,1,1,1]
//find high consecutive-repeted value in 1 
let count=0;
let large=-Infinity;
for(let i=0;i<a.length;i++){
    if(a[i]==1){
        count++;
        large=Math.max(large,count);
    }
    else{
        count=0;
    }
}
console.log(large);
