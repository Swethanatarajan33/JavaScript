let arr =['html','css','js','react','node','express','mongodb']

//! for in loop ----displays index
// gives the index
for(let i in arr){
    console.log(i, arr[i]); //i gives index
}

//! for of loop -----displays elements
 //it will display all the elements
 for(let ele of arr){
    console.log(ele); //ele gives values
    
 }
//! for in loop (in object)----displays key 
 let ob ={
    ob_name:"pen",
    price :20,
    color :"red"
 }
 for(let key in ob){
    console.log(key,ob[key]);  
 }

 //! for of loop is not possible in object

 for(let i in ob)
  {
   console.log(i);
    
 }
//!how to traverse
const users = [
  { id: 1,
    name: "Alice", 
    age: 25 
  },
  { id: 2, 
    name: "Bob", 
    age: 30 
  },
  { id: 3, 
    name: "Charlie", 
    age: 22 
  }
];

users.map((ele)=>{ //since it is object it returns value not key
    console.log(ele.name);
    console.log(ele.name.toUpperCase());
    console.log("student names is:" , ele.name);
    console.log("---------------------");
    
})

//alert --gives pop up msg after clicking ok then only it shows the page
//prompt -gives dialogue box which makes user to give input
let addNumbers =()=>{               //generally it gives string value
    let a= prompt("enter first number")
    let b= prompt("enter second number")
    alert(a+b)
}
addNumbers()
let addNumbers1 =()=>{          //since using of (parseInt) we get number value
    let a= parseInt(prompt("enter first number"))
    let b= parseInt( prompt("enter second number"))
    alert(a+b)
}
addNumbers1()