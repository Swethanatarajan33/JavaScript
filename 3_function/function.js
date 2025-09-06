console.log("function in javascript")

//! how to create the function

function display(){
    console.log("I am display function")
}
display()

//?ADD TWO NUMBERS 

function add(){
    let a=10
    let b=20
    console.log(`the addition ${a} and ${b} is ${a+b}`)
}
add()

//? FUNCTION WITH PARAMETER

function add(a,b){
    let c= a+b
    console.log(c);
    
    console.log(`the sum is ${a} and ${b} is ${a+b}`)
}
add(10,20)
/*
//? FUNCTION WITH RETURN KEYWORD

function multiply(a,b){
    return a*b;
}
let ans= multiply(10,3)
console.log(ans)

console.log(multiply(10,2))

//example:

function swap(a,b){
    let temp=a
    a=b
    b=a
}
let z=swap(10,20)
console.log(`the swapped value of ${a} and ${b} is ${z}`)


////incompete*/

//! 4.arrow functon =>

let sub = (a,b)=>
{
    return a-b
}

let res2 = sub(50,10)

console.log(res2)

//-find the power of any number
let subej =(a,p)=>
{
    let res=1;
    for(let i=1;i<=p;i++){
        res*=a
    }
    console.log(res)
}
let res1 =subej(2,3)


//! 5.Nested  Function

let outer=()=>{
    console.log("I am outer function")

    let inner=()=>{
        console.log("I am inner function")
    }
    inner()
}
outer()

//! what is Lexical scoping ??
//in nested function ,inner function can access all the properties of the outer function but the outer function can't access the properties of the inner function. it s called lexical scopping

let parent =()=>{
    let a=10
    let child =()=>{
        let b= 20

        console.log(`the value  of a is ${a}`)
        console.log(`the value  of b is ${b}`)
    }
    
    child()
}
parent()

//lexical,closer,higher order,iife---mock questions
//! 6. Higher Order Function:
// any function that takes another function as parameter is called as Higher order function
//the function is sent to the higher-order-functon as parameter 
//ex.map(),filter()methods

let hi =()=>{                   //?Higher Order Function
    console.log("i am hi function");
}

let hello2=(a)=>{                                        
    console.log("i am hello2 function");
    a()
}
hello2(hi)                       

//?call back function
hello2( ()=>{
    console.log("I am callback function");
    
});


//! 7.IIFE (immediate invoke function expression)
// whenever using iife stmt before used stmt should end with semicolon
// ()()inside 1 -function should  be written
//            2 -is used to call

(
    function()
    {
        console.log("hello how are you");
    }
)();


//ex2:
(
    function(a,b){
        console.log(a+b);
    }
)(10,20)
//anonyumous functon ex:
let calculate=(q1,p1)=>{
    return q1*p1
}
let amounts=calculate(10,20)
console.log(amounts);
//for single line no need of return and curly braces
let calculates=(q2,p2)=>q2*p2

let amount=calculate(10,20)
console.log(amount);
