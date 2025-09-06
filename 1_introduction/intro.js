console.log("I am External Javascript");
//semicolon is optional
// how many ways we can declare variable ??
//?let(local scope)
//?var(global scope)
//?const

//variable hosting === accessing an element before var keyword (ex: )
// 1.let    //in let keyword we cant do re-declaration 

let myName  //variable declaration
myName = "virat"    //variable initialization
let myAge = 35  //variable declaration and initialization

console.log(myName);
console.log(myAge);

//2.var     //in var keyword we can do re-declaration
var phno = 996292069;   //declaration and initialization
var city = "chennai";
console.log(phno);
console.log(city);

//! in var keyword we can do re-declaration but in let keyword we cant do re-declaration

//3. const 

const aadharNo = 1298673457457

console.log(aadharNo)

// datatypes:
//! 1.primitive :-
// 1) number

let eid= 2112
let salary=10000.50

//!typeof

//typeof operator is used to know the dataype of the variable

console.log(eid);
console.log(typeof eid);

//? 2)String 
//can declare by using "" ,'' ,and aslo using back tick``

let emp1= "rahul"
let emp2 = 'bumrah'
let emp3 = `gill`

console.log(typeof emp1);
console.log(typeof emp2);   
console.log(typeof emp3);

//? 3) boolean

let isMarried = false

console.log(typeof isMarried);

let hasChild = true

console.log(typeof hasChild)

//? 4) undefined
// any variable declared but not initialized is called undefined
// and typeof undefined will be undefined

let empPhno

console.log(empPhno);
console.log(typeof empPhno);

//? 5) null
// (variable initialized as null )
// (typeof null is object)

let empSal = null

console.log(empSal)
console.log(typeof empSal);
console.log(typeof null);

//? 6) bigint
//prefixed with n
let count= 2n
console.log(count);
console.log(typeof count);

//! Non-Primitive  Datatype
//? 1.Array

let arr =[10,"san",true,undefined,[30,40]]
console.log(arr)

//? 2. Function

function display(){
    console.log(" I am Display Function...")
}
display()

//? 3. Object

let student={
    sname:"santhanu",
    age:10,
    location:"bangalore"
    
}
console.log(student)

/*

let 
var
const

2 datatypes :
primitive 
non primiitive

function?
reuse
*/