
let outer=document.querySelector(".outer")

let changeColor=(color)=>{
     
    outer.style.backgroundColor=color; //inline css
    // alert(color)
}

let  themeChange =()=>{ //css written in class -external css
    outer.style.backgroundColor='white'
    outer.classList.toggle("dark") //if class is present in html it will act if not present it will not act instead of using add class and remove class we are usng toggle
    // outer.classList.toggle("red")
    // outer.classList.toggle("green")
}


//since color buttons are inline css and change theme is external css so after clickng of any color we cant change change theme beacuse inline css has higher priority
