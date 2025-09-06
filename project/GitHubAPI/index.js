let main =document.querySelector("main")
let getData =async()=>{
    try{
    let res = await fetch("https://api.github.com/users") //response
    let data = await res.json() //converted into json(promise) so use await to take data
    //console.log(data);
    data.map((ele)=>{
        let div = document.createElement("div")
        div.classList.add("card")
        console.log(ele);
        
        div.innerHTML=` <img scr=${ele.avatar_url}>
                        <h3>${ele.login} </h3>
                        <h3 id="one">View Profile</h3>
                        `
        main.append(div)
    })
    }
    catch(err){
        console.log(err);
    }
}
getData()