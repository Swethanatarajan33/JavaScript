 let student ={
    sname: "ajay",
    age: 15,
    phNo:1234512345,
    email: "ajay@gmail.com",
    city:"chennai"
 }

 console.log(student.phNo);
 console.log(student.email);
 
 //how to asign the object:    let {}
 //while using name given nside culrlu braces should be same it can be any order
//!object destrucutre
 let {sname, age, city, email,phno} = student
 console.log(sname);
 console.log(age);
 
 //!Array Destructure
 let arr =['html','css','js','react']

 let [sub1,sub2,sub3] =arr

 console.log(sub1);
 console.log(sub2);
 console.log(sub3);

//! rest parameter
 //rest parameter is used to group the remaining elements into an array.
 //It collects "the rest" of the arguments that were not explicitly specified.
 //the rest parameter is represented by //!   three dots (...)

 let display=(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c);  
 }
display(2,3,4,5,6,7,8,9)

//! spread operator
//the spread operator in JavaScript allows to expand an array ,object, or iterable into individual elements.

//It is often used to copy, merge,or pass elements.

//the spread operator is represented by//! three dots(...)

//whenever we need to combine or concat two array we can use spread operator

 let arr1=[1,2,3]
 let arr2=[4,5,6]

 let arr3=[...arr1]
 console.log(arr3)
 let arr4=[...arr1,...arr2]
 console.log(arr4)

//  diff b/w spread and  rest:
//  spread for individual Element
//  rest for taking and storing inside one variable

let arr6=['html','css','js','react','java']

console.log(sub1,sub2);

let [sub7,sub5,...sub]= [...arr6]
    //spread              //rest

console.log(sub7);
console.log(sub5);
console.log(sub);



//! shallow copy
//A shallow copy of an object is a new object that is a copy of the original, but it only copies ther references of nested objects nstead of creating new instances.

//ths means that if the original object contains another object as a property,changes to the nested object in the copy wll affect the orignaland vice versa.
// changing anythng will affect their reference also
let arr5 =[2,3,4,5,6]
let copy =arr5

console.log(copy);
copy.push(100)
console.log(copy);
console.log(arr5);

//!deep copy
// a deep copy creates a completely independent clone of the originaal object, including all nested object. changes to the copied object do not affect the original.

//to handle change in original array due to shallow copy we go for deep copy
//1st covert object into json(using stringify) then covert into object

let arr7=[1,2,3,4,5]
let copy2 =JSON.parse(JSON.stringify(arr6))

console.log(copy2);
copy2.push(100)
console.log(copy2);
console.log(arr6);


