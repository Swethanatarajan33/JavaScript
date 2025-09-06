// addEventListener used to print multiple events at a time 
//DOM properties will not prnt multiple events it prints lastly written event


//let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     console.log("Button clicked");  
// });
// btn.addEventListener("click",()=>{
//     console.log("how are you?");    
// });
// btn.addEventListener("click",()=>{
//     console.log("reena");
// });

// let counter =0;
// btn.addEventListener("click",()=>{
//      console.log("Button clicked");  
//      counter++;
//      console.log(counter);
//      });
// -----------------------------
/* btn = document.querySelector("button");

let counter=0;

let fn1 =()=>{
    counter++;
    console.log("Button clicked");
};
btn.addEventListener("click",fn1);

btn.addEventListener("click",()=>{
    console.log(counter);
    console.log("How are you");
});

btn.addEventListener("click",()=>{
    console.log("How was the date?");
    if(counter>=5) //after the condition satisfacton it stops ar removes the function given i.e fn1 function wll be removed
        btn.removeEventListener("click",fn1) //removeEventListener  remove that function
});*/
// ------------------------------
let counter =0;
let value = document.querySelector("b");
// value.innerText =counter;

let increment =()=>{
    counter++;
    value.innerText =counter;

    if(counter >=10){
        alert("limit reached");
        btn.removeEventListener("click",increment);
    }
};
let btn=document.querySelector("button");
btn.addEventListener("click",increment);