//! uppercase       lowercase        -returns new string
let names = "swetha"
let s_name = "santhanu"

let g1_name= names.toUpperCase()
let b1_name= s_name.toLowerCase()

console.log(g1_name)
console.log(b1_name)

let g2_name=names.indexOf("th")
let b2_name= s_name.indexOf("th")

console.log(g2_name)
console.log(b2_name)

let g3_name=names.lastIndexOf("a")
let b3_name=s_name.lastIndexOf("a")

console.log(g3_name)
console.log(b3_name)

let g4_name=names.charAt(3)      // -give index
let b4_name=s_name.charAt(3)

console.log(g4_name)
console.log(b4_name)

let g5_name=names.includes("tha")
let b5_name=s_name.includes("tha")

console.log(g5_name)
console.log(b5_name)

let g6_name=names.trim() //! make whitespace in your name
let b6_name=s_name.trim()

console.log(g6_name)
console.log(b6_name)

let g7_name=names.split("tha")
let b7_name=s_name.split("tha")

console.log(g7_name)
console.log(b7_name)

let g8_name=names.replace("a","❤")
let b8_name=s_name.replace("a","❤")

console.log(g8_name)
console.log(b8_name)

let g9_name=names.replaceAll("a","❤")
let b9_name=s_name.replaceAll("a","❤")

console.log(g9_name)
console.log(b9_name)

let g10_name=names.concat(s_name)
let b10_name=s_name.concat(names)

console.log(g10_name)
console.log(b10_name)

let g11_name=names.slice(2,5) //! only from left to right
let b11_name=s_name.slice(-5)

console.log(g11_name)
console.log(b11_name)

let g12_name=names.substring(1,5)
let b12_name=s_name.substring(1,5)

console.log(g12_name);
console.log(b12_name);

let g13_name=18
let b13_name=4

console.log(`the addition of ${g13_name} and ${b13_name} is ${g13_name + b13_name}`);


