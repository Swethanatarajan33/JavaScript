
//1.document.getElementById(" ")
//2.document.getElementByClassName(" ")
//3.document.getElementsByTagName(" ")
//4.querySelector(" ")
//5.variable.innerText=" "
//6.variable.innerHTML=" "

let l1 =document.getElementById("logo")
console.log("gives the element",l1);

let c2 =document.getElementsByClassName("box")
console.log("gives the collections",c2);

let t3 =document.getElementsByTagName("li")
console.log("gives collections",t3);

let q1 =document.querySelector("#logo")
console.log(q1);
let q2 =document.querySelector(".box")
console.log(q2);
let q3 =document.querySelector("li")
console.log(q3);
console.log(q3[1]);

