console.log("this is event");

let  login =()=>{
    console.log("login done"); 
}
//here we are not calling the function to execute 
// insteatd

let changeColor=()=>{
    let main= document.querySelector("main")
    //console.log(main);
    main.style.backgroundColor="pink";
}

let changeColor2=()=>{
    let main= document.querySelector("main")
    //console.log(main);
    main.style.backgroundColor="aqua";
}