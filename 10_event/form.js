/*let form=document.getElementById("stuForm") //targeting id
console.log(form);

stuForm.addEventListener("submit",(e)=>{
    e.preventDefault() //stops refresh
    //snce i need to know the value in the nput taggg so we can give(.value)
    let userName= document.getElementById("userName").value
    let userPass= document.getElementById("userPass").value
    console.log(userName,userPass);
     
    console.log("submitted successfully");

    document.getElementById("userName").value=""
    document.getElementById("userPass").value=""
    
})*/
/*
let form=document.getElementById("form")
console.log(form);

Addition.addEventListener("submit",(e)=>{

    e.preventDefault();
    
   let Number1=parseInt( document.getElementById().value)
   let Number2 =parseInt(document.getElementById().value)
   console.log(Number1+Number2);
   
   let output=document.querySelector(".outer")
   output.innerHTML=`<h2>the additon of ${Number1}and ${Number2}id ${Number1+Number2}</h2>`

    console.log("Added");
    
})

let select=document.querySelector("select")
console.log(select);

select.addEventListener("change",(e)=>{
    let color =e.target.value
    console.log(color);
    let outer =document.querySelector(".outer")
    outer.style.backgroundColor=color
    
})
*/


let stuForm = document.getElementById("stuForm") 

console.log(stuForm)


stuForm.addEventListener("submit",(e)=>{

    e.preventDefault()


    let userName = document.getElementById("userName").value 

    let password = document.getElementById("userPass").value

    console.log(userName,password)

 
    document.getElementById("userName").value = ""
    document.getElementById("userPass").value =""

    alert("submitted")

})
