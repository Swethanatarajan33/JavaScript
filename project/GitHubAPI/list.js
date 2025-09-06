// let fetchedData= fetch("https://api.github.com/users")
// console.log(fetchedData);
let ol= document.querySelector("ol")

let fetchData = async()=>{
    
    let response = await fetch("https://api.github.com/users")
    console.log(response);/*promise into response */
    
    let data = await response.json();
    console.log(data);/*response into json */

}
fetchData()

