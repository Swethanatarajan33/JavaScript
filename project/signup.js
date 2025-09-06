let form= document.querySelector("form")
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let username=document.getElementById("username").value
    let userpass=document.getElementById("userpass").value

    console.log(username,userpass);
    //! storing the data in the local storage
    localStorage.setItem("userName",username);
    localStorage.setItem("userPass",userpass);

    console.log("signup done");

    open("./login.html")
})
