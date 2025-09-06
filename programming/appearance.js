//find single appearance
let a =[1,2,3,3,1,4,2]

for(let i=0;i<a.length;i++){
    let count=0;
    for(let j=0;j<a.length;j++){
        if(a[i]==a[j]){
            count++
        }
    }
    if(count==1  ){
        console.log(a[i]);

    }
}

//or     by  using xor operation     same no =0 

let res=0
for(let i=0;i<a.length;i++){
    res=res^a[i]
}
console.log(res);

