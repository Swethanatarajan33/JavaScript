//! Array

//array is a linear datastucture where we can store multiple values in continuous manner.
//in javascript we can store b/h homogeneous and heterogeneous data in array.
//we can add or remove in the array
//any modification is mostly done in original array

//!heterogeneous type of array

let arr =[9,"hello",true,undefined,null,()=>{},[3,4,5]]
console.log(arr)

//!some methods in array:-

                                //?how to know the length of array
console.log(arr.length);

                                //?how to access the element from the array
console.log(arr[1])

//! Array Methods in js:
//1* push() --used to modify or used to add any element at the end of the array ,it will return the length of the modified array
//2*pop()   --used to remove the last element from the array and it will return the removed element not length
//3*unshift() --used to add the element at the starting of the array ,return the length of the array
//4*shift() --used to delete the element from the starting of the array ,return the removed element
//5*includes() --used to check whether the data is present or not ,return true or false
//6*indexOf() --returns the index of the eleemnt ,if no element is present then it will return -1
//7*concat() --used to combine two or more than two arrays and it will return one new array
//8*join()   --convert any array into string
//9*reverse() --used to reverse the array . and it will modify the original array and it will be in reverse order
//10*slice(start_ndex,end_index) --used to extract the array  ,it will not modify the original array
//11*splice(startng index,count to delete element)
//  splice(startng index,count to delete ,replace an element)--by using this method we can remove,add,modify the array element. it can take 3 parameters(statindex,deletecount,replacevalue) this method will modify the original array.retruns new array


//! Higher Order Array Method //fun takes another fun as parameter (map,filter,reduce)
//1*forEach(   ()=>    ) -- is higherorder array method ,it is used for travesing the array.
                    // it wll take one callback functon where it can take 3 parameter(element,index,array) -//?no return type
//it is the higher order array methods . takes callback function as thier parameter 
//it can take 3parameter 1.function 2.index(i) 3.original array
//if you take 1 parameter wiith any name it will dsplay the array valuess  only

///2*map(()=>{})    --is higherorder array method ,it is used for travesing the array and returns. and we can perform any operations with all the elements.
                    //t will take 3 parameter
                    //t will return new array
                    // it wll take one callback functon where it can take 3 parameter(element,index,array) -//?has return type
                    //whenever taking map method store t inside a variable

//3*filter(()=>{})        --is higherorder array method , it is used for traverse and check the condition.(filetr the condition)
                    //if the condition is matching it wll return thaat  element.
                    //t can take 3 parameters.

//4*reduce(()=>{} ,value)          --reduces the array into single arraay  -----takes 4 parameter(accumulator(acc),element,index,array)

//5*sort(()=>{})            --this method is used to arrange the array in ascending or descending order
                    //it wll take two parameters.
                    //firstpara - secondPara => ascending order
                    //secondPara - firstPara => descending order
let students=["rahul","gill","pant"]
//1.push()
students.push("bumrah")
console.log(students);
let a=students.push("bumrah")
console.log(a);

//2.pop()

let players = ["gambir","dhoni","sachin","yuvaraj"]
console.log(players);
players.pop()
let a1=players.pop()
console.log(players);
console.log(a1);

//3.unshift()

let serials =["vani rani","puvepuchudava","saravanan meenakshi"]
console.log(serials);

serials.unshift("chandralekha")
let a2=serials.unshift("chandralekha")

console.log(serials);
console.log(a2);

//4.shift()

let movies=['leo','goat','dj']
movies.shift()
console.log(movies);

//5.includes()

console.log(movies.includes("dj"));
console.log(movies.includes("leo"));

//6.indexOf()

let webSeries=['loki','dark','breaking bad','money heist']
console.log(webSeries.indexOf('dark'));

//7.concat()

let arr2=[10,20,30]
let arr3=[40,50,60]

let combineArr= arr2.concat(arr3)
let combine = arr2.concat(arr3,['hello','hi'])
console.log(combineArr);
console.log(combine);

//8.join()

let charArr=['h','e','l','l','o']

console.log(charArr.join(""));

console.log(charArr.join("&"));

//9.reverse()

let arr4=[1,2,3,4,5,6]
console.log(arr4.reverse());
console.log(arr4);

//10.slice()

let arr5=[10,20,30,40,50]
console.log(arr5.slice(1,3));


//11.splice()
let arr6=[10,20,30,40,50,60,70]
arr6.splice(1,3)
console.log(arr6);

let arr7=[10,20,30,40,50,60,70]
arr7.splice(1,2,100)
console.log(arr7);

let arr8=[10,20,30,40,50,60,70]
arr8.splice(2,0,25)
console.log(arr8);

//! Higher Order Array Methods
//?in react we can't do looping stmts 
//1.forEach()
let numbers=[10,20,30,40,50]

numbers.forEach( (ele,index,array)=>{           //normal array
    console.log(ele,index,array);    
} )

numbers.forEach( (reena)=>{                     //only values
    console.log(reena);    
} )

numbers.forEach( (reena,i)=>{                   //values with index
    console.log(reena,i);    
} )

numbers.forEach( (reena,i)=>{                   
    console.log(reena);    
} )

numbers.forEach( (reena)=>{                     //
    console.log(reena+100);    
} )


let numbers1=[10,20,30,40,50]
let array1=[]

numbers1.forEach( (ele)=>{
    array1.push(ele+100)
})
console.log(array1);

//2.map() -used for traversing the array and it returns 
let numbers3=[10,20,30,40,50]

let mappedArr=numbers3.map((ele,index,arr)=>{
    //console.log(ele,index,arr);
    return ele + 100
})
console.log(mappedArr);

let numbers2=['high','low','good','bad','ugly']

let user=numbers2.map((ele)=>{
    return ele.toUpperCase()
})
console.log(user);

//3.filter()  f it matches it will return the value,used  to check the condition

let nums=[5,10,15,20]

let greater = nums.filter( (ele)=>{
    return ele >10
})
console.log(greater);
//?add all the element 
let num=[5,10,15,20]

let greate = num.filter( (ele)=>{
    return ele >10
})
console.log(greate);

//4.reduce()

let sum2 =nums.reduce( (acc,ele)=>{
    return acc +ele
},0) //-------------here is the place we will asign a value for accumulator if we are not asigned then it will take the first element as the default value
console.log(sum2);

let multiply = nums.reduce((acc,ele)=>{
    return acc*ele
},1)
console.log(multiply);
//or without asigning accumulator value
let multiple = nums.reduce((acc,ele)=>{
    return acc*ele
})
console.log(multiple);

//5.SORT()

let arr9=[5,1,4,8,2,40]

let asc = arr9.sort((x,y)=>{
    return x-y
})
let arr0=[1,2,3,4,5]
let dsc = arr0.sort((x,y)=>y-x)

console.log(asc);
console.log(dsc);

//!greater than 30 =add 100 and finally add all the elements in the array
//[40,50]
//[140,150]
//290
/*
let arr10 =[10,20,30,40,50]
array= arr10.filter( (ele)=>{
    return ele >30
})
console.log(array);

array.forEach( (reena)=>{                     //
    sri=reena+100;    
} )
let sum3 =sri.reduce( (acc,ele)=>{
    return acc +ele
},0) //-------------here is the place we will asign a value for accumulator if we are not asigned then it will take the first element as the default value
console.log(sum3);

*/

//answer:
let arr10 =[10,20,30,40,50]
let f= arr10.filter((ele)=>{
    return ele >30
})
console.log(f)
let m= f.map((ele)=>{
    return ele+100
})
console.log(m)

let r=m.reduce((acc,ele)=>{
    return acc+ele
})
console.log(r);

//or

let result = arr10.filter((ele)=>ele>30).map((ele)=>ele+100).reduce((acc,ele)=>acc+ele)
console.log(result);

