console.log("timing functon in js");
console.log("start");
console.log("end");
//setTimeout -executes after a specific time
//setTiimeout takees 2 parameters :(calllback fun,time)
//used to send msg at some time
//?1 way:-
let display=()=>{
    console.log("I am executed");
}
//display()

setTimeout(display,5000)
//?2nd way:-
setTimeout(()=>{
    console.log("Happy or sad");
},4000)

console.log("bye");

//setInterval -prints again again till to a specific time

// setInterval(()=>{
//     console.log("hi");
// },5000)

let sorry =()=>{
    console.log("Booking done");
}
// setInterval(sorry,1000)//to stop printing agan and again
let interval= setInterval(sorry,1000)
// clearInterval(interval)
console.log("end");
































// setTimeout
// setInterval
// clearInterval
// clearTimeout