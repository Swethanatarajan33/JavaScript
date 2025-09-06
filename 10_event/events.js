

// let btn=document.querySelector("button")
// console.dir(btn)  //used to seee the object which prints the object directory these are provded by browser
// console.log(btn);

// let handleClick =()=>{
//     console.log("Clicked");
// };
// btn.onclick=handleClick;

let div = document.querySelector("div")
// console.dir(div)

// div.onmouseenter=()=>{
//     console.log("Mouse entered in the div");
// };
// div.onmouseleave=()=>{
//     console.log("Mouse leaved the div");   
// };

// div.onclick =()=>{
//     console.log("Button clicked");
// }
// div.onclick=()=>{
//     console.log("hi how are you"); 
// }
//---------------------------------------
/*let btn=document.querySelector("button")
let form=document.querySelector("form")
btn.addEventListener("click",()=>{
   // let div=document.createElement("div") //am crreatng label item
    
    let itemLabel = document.createElement("label")
    itemLabel.innerText ="Item";
    
    dispatchEvent.appendChild(itemLabel);

    let itemInput = document.createElement("input");
    itemInput.setAttribute("placeholder","Enter item")

    div.appendChild(itemInput);
    
    let quantityLabel = document.createElement("label")
    quantityLabel.innerText ="Quantity";

    div.appendChild(quantityLabel)

    let quantityInput =document.querySelector("input")
    quantityInput.setAttribute("type","number")
    quantityInput.setAttribute("placeholder","Enter quantity")

    dispatchEvent.appendChild(quantityInput)

    let priceLabel = document.querySelector("input")
    priceLabel.innerText="Price"

    div.appendChild(priceLabel)
    priceInput =document.createElement("price")
})*/

// -----------------------------------
let form = document.querySelector("form");
let btn = document.querySelector("button");
/*//---since we uses form events so button events no needed
// btn.addEventListener("click",e=>{
//     ////e.preventDefault();
//     console.log(e);
//     console.log("button clicked");
// });
*/
form.addEventListener("submit",e=>{
    e.preventDefault(); //preventDefault used to stop refreshing the page
    // console.log(e);
     console.log("Form submitted");
    let inputs=document.getElementsByTagName("input");
    //console.log(inputs);
    for(let i=0;i<inputs.length;i++){
        console.log(inputs[i].value);  
    }  
});

