let arr=[1,2,10,3,4,5]
let flag=true
for(let i=1;i<arr.length;i++)
    {
        if(arr[i-1]>arr[i])
        {
            flag=false
            break;
        }
    } 
    if(flag==true)
        console.log("sorted");
    else
        console.log("not sorted");
   //! check the array is sorted or not
