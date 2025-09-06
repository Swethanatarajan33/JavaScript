//!fetch -is used to fetch any api data
//it retunrs promise //we have to handle by original data
 //since we need data we need to convert it into json format
//my note what i analysed:- 
//1st prints all printing stmts
//2nd finally ->then or catch 
let fetchedData= fetch("https://fakestoreapi.com/products")

console.log(fetchedData);//promise

fetchedData
.then((data)=>{
    console.log(data); //response
})
.catch((err)=>{
    console.log(err);    
    
})
// console.log(fetchedData);


let fetchedData1 =fetch("https://fakestoreapi.com/products")
console.log(fetchedData1); //promise
console.log(`hrllo`);
fetchedData1
.then((data)=>{
    console.log(data); //response
    //!converting into json

    let jsonData = data.json()
    console.log(jsonData); //promise<pending>
    
    jsonData.then((data)=>{
        console.log(data);  //original data
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err)=>{
    console.log(err);
})