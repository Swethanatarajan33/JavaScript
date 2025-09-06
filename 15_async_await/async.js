let ol = document.querySelector("ol")

let getData = async ()=>{

    try{
        
         let res =  await fetch("https://fakestoreapi.com/products")
                     
          let data  =  await res.json()

          console.log(data) //values

          data.map((ele)=>{
            console.log(ele.title)
            console.log(ele );
            
            let li = document.createElement("li")

            li.innerText = ele.title

            ol.append(li)
          })

    }

    catch(err)
    {
        console.log(err)
    }
}
getData()

/*/*santanu sir notes



let ol = document.querySelector("ol")


let getData = async ()=>{


    try{
        
         let res =  await fetch("https://fakestoreapi.com/products")
                     
          let data  =  await res.json()

          console.log(data)

          data.map((ele)=>{
            console.log(ele.title)

            let li = document.createElement("li")

            li.innerText = ele.title

            ol.append(li)
          })

    }

    catch(err)
    {
        console.log(err)
    }


}

getData()
*//*ex:-
let getDataa = async()=>{
  try{
    let data = await fetch("https://api.github.com/users")
    //console.log((data));
    let jsonData = await data.json()
    console.log(jsonData); //it wll gve the origina data.
  }
  catch(err){
    console.log(err);
  }
}
getData()*/