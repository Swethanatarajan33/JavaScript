let now= new Date()
console.log(now);

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getDate());
console.log(now.getSeconds());
console.log(now.getFullYear());

console.log(now.getDay()); //returns the value in integer formt
//to get day in string 
let days=['sunday','Monday','Tuesday','Wednesday','Thursday','friday','saturday']
console.log(days[now.getDay()]);


let months=['jan','feb','march','april','may','jun','jul','aug','sep','oct','nov','dec']
console.log(months[now.getMonth()]);

console.log(now.toLocaleDateString());
console.log(now.toDateString());
console.log(now.toLocaleString());
/*
let showTime=
let time= document.getElementsByClassName(".inner");
let t= now.toLocaleTimeString()
inner.innerHtml=`<h1>${t}</h1>`
showTime()
setInterval(showTime,1000)
*/
//!Math Object
console.log(Math.sqrt(16));
console.log(Math.pow(5,2));
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.6));
console.log(Math.ceil(9.2));


console.log(Math.round(9.5));
console.log(Math.round(9.6));
console.log(Math.round(9.2));


console.log(Math.floor(9.5));
console.log(Math.ceil(9.6));
console.log(Math.ceil(9.2));

console.log(Math.min(2,3,4));
console.log(Math.max(1,6,8));

console.log(Math.floor(Math.random()*10));








