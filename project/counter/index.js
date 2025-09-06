/*let button= document.querySelector("#clicked");
// let counter=0;
let button1= document.querySelector("#reset");

// button.innerText=counter.getSeconds();
let counter= new Date();
console.log(counter);
counter.getSeconds();

button.addEventListener("click",()=>{
    console.log("Button Clicked");
})

button1.addEventListener("click",()=>{
    console.log("Button Clicked");
})
    */
    let clicked = document.querySelector("#clicked");
    let reset = document.querySelector("#reset");
    let clicking = document.querySelector("#clicking")
    let count=0
    clicked.addEventListener("click",()=>{
        setInterval(count++,1000)
        document.querySelector("b").innerText=count
    })
    reset.addEventListener("click",()=>{
        document.querySelector("b").innerText=0
    }) 
    clicking.addEventListener("click",()=>{
        setInterval(count--,1000)
        document.querySelector("b").innerText=count
    })
