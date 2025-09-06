

//let c=[1,2,3,4,5,6,7,8,9,]
// let c = [a.length+b.length];
// console.log(c)
// for(let i=0;i<c.length;i++){
//     if (c[i]==i) {
//         console.log(c[i]);
//     }
//     else{
//         console.log(c[i]);  
//     }
// }
let a=[1,3,5,7,8,9]
let b=[2,4,6]
let i=0
let j=0
let c=[]
while(i<a.length && j<b.length){
    if(a[i]<b[j]){
        c.push(a[i++]);
    }
    else{
        c.push(b[j++])
    }
}
while(i<a.length){
    c.push(a[i++])
}
while(i<b.length){
    c.push(b[j++])
}
console.log(c);
