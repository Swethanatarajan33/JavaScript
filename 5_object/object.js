    //! Object creation by using object literals

let student={
    sname : "Reena",
    age : 10,
    isPlayer : false,
    skills : ['html','css','js'],
    address : {
        city : "chennai",
        pincode : 567876
    },
    work :()=>{
        console.log("sleep eat play");
        
    }
}

//! how to access
console.log(student);
console.log(student.sname);

student.work()

//objectname.key
console.log(`student age is : ${student.age}`);

//! how to modify
student.age=18
console.log(student);

//! how to add
student.phno=9999999999
console.log(student);

console.log(student.address.city);

//! how to delete
delete student.isPlayer
console.log(student);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


//! Methods in object

//! 1.Object.keys
// this method is used to return all thekeys in the object form of array

let keys=Object.keys(student)
console.log(keys);

//! 2.object.values()

let values=Object.values(student)
console.log(values);

//! 3.object.entries()
//gves all keyt values
let key_value=Object.entries(student)
console.log(key_value);

//! 4. Object.freeze()
//this method is making the object frozen where we cannot delete or add or modify the object.
let ob1={
    name : "pen",
    price : 20,
    color : "red"
}
console.log("Before freeze");
console.log(ob1);

console.log("After freeze");
ob1.price=30
Object.freeze(ob1)

//! 5. Object.isFrozen()
// it is used tho check whether the given object is frozen or not. If it is frozen it will return true otherwise return false.

console.log(Object.isFrozen(ob1));
console.log(Object.isFrozen(student));//check is freeze or not

//! 6.Object.seal()
//it is simlar to object.freez() method, here we cannot do delete or add but we can modify.

let ob2={
    name:"book",
    price:456,
}

console.log("before seal");
console.log(ob2);

console.log("after seal");
Object.seal(ob2)
console.log(ob2);

ob2.price=552;
delete ob2.name;    // delete is not possible
console.log(ob2);

//! 7. Object.isSealed()
//it is used to know whether the object is sealed or not
//we can do modificaton
console.log(Object.isSealed(ob2));
console.log(Object.isSealed(ob1));
console.log(Object.isFrozen(student));

//! 8. ObjectName.hasOwnProperty()
// it is used to know the key is present or not in the object, it will return boolean value.

console.log(ob2.hasOwnProperty('price'));

//! 9.object.assign() --combines two or more object to retrun a new object
let ob3={
    sname:"virat",
    age:10
}
console.log(ob3);

let ob4={
    location:"chennai",
    phNo:1234567890
}
console.log(ob4);
//let combineOb= Object.assign(ob3,ob4)  --if given like this means after making combine we cant access separate objects even we are trying to acess it gives combined value also
let combineOb= Object.assign( {} ,ob3,ob4) 
console.log(combineOb)

console.log(ob3);

