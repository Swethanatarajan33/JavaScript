//! how to declare string
let str1 = "first String"
let str2 = 'second String'
let str3 = `third String`

console.log(str1);
console.log(str2);
console.log(str3);

console.log( typeof str1);
console.log( typeof str2);
console.log( typeof str3);

//! how to know the  length of the string

console.log(str1.length)

//? 1. toUpperCase()
//this method is used to convert any string into uppercase
// and it will return one new string.

let myName = "santanu"

let upper = myName.toUpperCase()

console.log(myName.toUpperCase())

console.log(upper);

console.log(myName);

//? 2. toLowerCase()

//this method is used to convert any string into lowercase
// and it will return one new string.
let address = "CHENNAI"

console.log(address.toLowerCase())
let lower = address.toLowerCase()
console.log(lower)

console.log(address)

//? 3. indexOf("value")

//it is used to know the index of the given charecter from the string.
//it will take the first occurance of the given character.
//if the character is not present it will give -1.

console.log(address.indexOf("N"));  //3
console.log(address.indexOf("n"));  //-1

//? 4.lastIndexOf()

//this method will give the last occurance index number of the given character from  the string.

console.log(address.lastIndexOf("N"))  //4 

//? 5. charAt()

//it is used to know the character present in the given index1.

console.log(address.charAt(3))  //N

//? 6. includes()

let msg = "hello how are you"

//used to find whether the given string is present or not 
//if it s present it wll return true otherwise it will return false

console.log(msg.includes("hello"))

console.log(msg.includes("Hello"))

//? 7. trim()
// it is used to remove the whitespaces from both the sides of the string and it will return new string.

let mobileName="  Redmi"

console.log(mobileName);
console.log(mobileName.length);

let mobile2=mobileName.trim()

console.log(mobile2);
console.log(mobile2.length);
console.log(mobileName);

//? 8. split()

let wish="good morning everyone"
console.log(wish);  //good morning everyone
let arr=wish.split(" ");
console.log(arr);    //["good","morning","everyone"]
console.log(wish.split()); //["good morning everyone"]
console.log(wish.split("")); //['g', 'o', 'o', 'd', ' ', 'm', 'o', 'r', 'n', 'i', 'n', 'g', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']


let ar=wish.split("e")
console.log(ar);    //["good morning ","v","ryon",""]


//? 9.replace()
//it is used to replace one string with another string.
// it will replace only the first character

let info="I am from chennai"

let r=info.replace("a","$") // it will take only the first character
console.log(r);

//? 10. replaceAll()
// it will replace2 all the occurance of the given string.

console.log(info.replaceAll("a","$")); // all the character a is replaced here


//? 11.concat()
// this method is used to combine 2 or more than two strings and it will return one new string.

let str4="good afternoon"
let username="reena"

let newstr=str4.concat(username)
console.log(newstr);  // good afternoonreena

console.log(str4.concat(" ",username)); // good afternoon reena


//? 12. slice()
//it is used to extract one string from another string
//it will take 2 parameters(start index, end index)
//it will not include the end index value.
//here the string can traverse from left to right only
        //0123456789012345670
let str5="Hello how are you?"
console.log(str5.slice(1,4));   // ell
console.log(str5.slice(6));     // how are you?
console.log(str5.slice(-1,-7)); // no output
console.log(str5.slice(-3));    // ou?
console.log(str5.slice(-5,0));  // no output
console.log(str5.slice(-8,-1)); // are you


//? 13. substring()
//it is used to extract one string from another string
//it will take 2 parameters(start index, end index)
//it will not include the end index value.
//here we can give negative values also

console.log(str5.substring(1,4));   // ell
console.log(str5.substring(6));     // how are you?
console.log(str5.substring(-6));    // hello how are you?
console.log(str5.substring(4,1))    // ell


//todo String Interpolation

let num1=10
let num2=20
let ad =num1 + num2;

// addition of num1 and num2
console.log(`the addition of ${num1} and ${num2} is ${ad} `);

console.log(`the multiplication of ${num1} and ${num2} is ${num1 * num2} `);