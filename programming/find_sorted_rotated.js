

let isSortedRotated =(arr)=>{
    let n= arr.length
    let count=0
    for(let i=1;i<n;i++)
    {
        if(a[i-1] > a[i])
            count++
    } 
    if(a[n-1] > a[0])
            count++

// if(arr[n-1]>arr[0])
//     count++
// console.log(count);

if(count==1)
        console.log("sorted and rotated");
else
        console.log("not sorted and not rotated");

}
let a=[5,6,1,2,3,4]
let b=[13,10,11,12]
let c=[5,6,7,8]
let d=[1,4,6,5,7]

isSortedRotated(a)
isSortedRotated(b)
isSortedRotated(c)
    
//if any array getting count as 1 
// if prev great ++
// if last is great than frst one ++