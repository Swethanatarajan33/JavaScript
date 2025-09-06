//!promise -it is an javascrpt object 
// created using new keyword
// takes 1 calllback fun
// with 2 parametes resolve and reject
// states in promise:
// *pending
// *fullfilled
// *rejected
// to check whether the promise i(it has 1s resolved or rejected we use:
// .then is used to handle the resolve 
// .catch is used to handle the reject
//.finally is used to check whether the promise is present or not and it executes always
// here execution of finally will occur first then according to rejeect and resolve next executon will be occured
// -----------------------------------------------------------------------------------
let p1= new Promise((resolve,reject)=>{

})

console.log(p1);
// ------------------------------------------------------------------------------------------------------------------
let p = new Promise((resolve,reject)=>{
    let givingMock =true;

    if(givingMock){
        resolve("mock given")
    }
    else{
        reject("not given mock")
    }
})
// console.log(p); //Promise { 'mock given' } //Or Promise { <rejected> 'not given mock' }
p.then((data)=>{
    console.log(data); //mock given
})
.catch((err)=>{
    console.log(err);
})
.finally(
    console.log("promise is there") 
)
console.log(p);

