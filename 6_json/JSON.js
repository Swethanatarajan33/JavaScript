//javascript object notation
/*used to interchange the data  from one system to another system
values stored in key and valaue pairs
we can use n any languages*/

// JSON (JavaScript Object Notation) is a lightweight data-interchange format 
// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 


let ob= {
    sname : "rahul",
    age : 15,
    phNo : 90124525343
}

console.log(ob);
//1. 1.JSON.stringify()
// ------------------
// convert any js object into json
// it will not have prototype
// type : String

let jsonData=JSON.stringify(ob)

console.log(jsonData);
console.log(typeof jsonData);

//2.JSON.parse()
// ------------------
// convert any json into javascript object
let jsonData1=JSON.parse(jsonData)

console.log(jsonData1);
console.log(typeof jsonData1);

