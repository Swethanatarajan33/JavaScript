44//!how to target elements
//combination of tag name and content called element



//! target by id - since id is unique we can target only one id one time
let logo =document.getElementById("logo")
console.log(logo)

//!target by class  -return html collection (as array)

let boxes=document.getElementsByClassName("box")

console.log(boxes); //it return html collections (like array )

let secondbox= boxes[1]
console.log(secondbox);

//!target by tagname -return html collection (as array)

let list = document.getElementsByTagName("li")
console.log(list);
//to target particularly then give index of the value
let list3= list[2];
console.log(list3);

let login =document.getElementsByClassName("btn")
console.log(login); //shows the place
console.log(login[0]); //shows the code

//! query selector -returns 1st element
let logo2=document.querySelector("#logo")
 console.log(logo2);

let firstBox= document.querySelector("li")
console.log(firstBox);

let b= firstBox[2]
console.log(b);

//! innerText --gives text with the tagname , innerHTML--gives normal text
// whenever we are writting something t will get replaced .e before anything is there and we are writtng something t will get replaced by that value
console.log(secondbox.innerText);

console.log(secondbox.innerHTML);

let thirdBox =boxes[2]
console.log(thirdBox);

thirdBox.innerHTML ="<h2> i am box3 from js</h2><p>hello how are you?</p>"

thirdBox.innerHTML ="<h2>hiiii</h2>"


//!how to style
let loginbtn= document.querySelector(".btn")
console.log(loginbtn);

loginbtn.style.backgroundColor ="red"
loginbtn.style.padding ="10px"
loginbtn.style.color="white"

//!how to style which have so many elements-using index
// let section1 = document.getElementsByTagName("section")
// section1.style.backgroundColor="red"
// console.log(section1);


//!how to give class or add class
//Element.classList.add("classname")
//Element.classList.remove("classname")

let section = document.querySelector("section")
console.log(section);

section.classList.add("con2")
console.log(section.classList);

//! how to create element
let button=document.createElement("button")
button.innerText="button from json"
button.style.backgroundColor="green"
button.style.color="white"
button.style.display="flex"
//i used secton as the variable which is  already defined upp
// section.after(button)
// section.append(button)
//section.prepend(button)
section.before(button) //

let footer = document.createElement("div")
footer.classList.add("footer")


footer.innerText="footer from js"
footer.innerHTML ="<p>footer from js</p>"
footer.style.backgroundColor="black"
footer.style.color ="white"
footer.style.height="300px"
footer.style.width="300px"
footer.style.display="flex"
footer.style.alignItems="center"
footer.style.justifyContent="center"

section.after(footer)




















//how to target
//how to wrte inside element
//how to write css in js
// how to add class
