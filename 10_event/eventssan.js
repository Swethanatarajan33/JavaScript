let display =()=>{
    alert("btn clicked...")
}

let btn2=document.querySelector(".btn2")
console.log(btn2);

btn2.addEventListener("click",()=>{
    alert("btn2 clicked....")
})

//in event handler we will give in html
//we cant use same event more than one time but we can use difeerent events
//in event listner we can give in js part using eventListener() which accepts 2 parameter 1st parameter is event 2nd prameter s function
//we can give same event any number of time

//event object is used to see what element we are targeting
let hello1=()=>{
    console.log("clicked hello1");
}
let hello2=()=>{
    console.log("clicked hello2");
}

let cards=document.getElementsByClassName("card")
console.log(cards[1]);

cards[1].addEventListener("click",()=>{
    console.log("card2 clicked");
})
cards[2].addEventListener("click",(e)=>{
    console.log(e.type);
    console.log(e.target);
    // console.log(cards[2]);
    
    console.log("card3 clicked");
})
//since  am not targeting
cards[1].addEventListener("click",()=>{
    cards[1].innerHTML=cards[0].innerHTML
    cards[0].innerHTML=""
})
cards[0].addEventListener("click",()=>{
    cards[0].innerHTML=cards[1].innerHTML
    cards[1].innerHTML=""
})

let section =document.querySelector("section")

section.addEventListener("mouseover",()=>{
    section.style.backgroundColor="yellow"
})
section.addEventListener("mouseleave",()=>{
    section.style.backgroundColor="red"
})

let inp1= document.querySelector("#inp1")
inp1.addEventListener("keypress",()=>{
    console.log("key has pressed");
})
inp1.addEventListener("keyup",(e)=>{
    console.log(e.target.value);

    console.log("key up event occured");

    let output =document.querySelector(".output")
    output.innerText=e.target.value
    
})


