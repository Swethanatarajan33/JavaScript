let isPalindrome=(arr)=>{
    let n=0
    let m=arr.length-1
    while(n<=m){
        if(arr[n]!=arr[m])
            return false
        n++
        m--  
    }
    return true
}

let a=[1,2,3,2,1]
let b=[1,5,6,4,1]

console.log(isPalindrome(a));
console.log(isPalindrome(b));

