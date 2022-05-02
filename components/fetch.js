


let searchCountry = async(query) => {
   //let url = "https://masai-mock-api.herokuapp.com/news?q={query}" 
try {
    //let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)
    let data = await res.json()
   // console.log("data: ", data);
   return data;



} catch (error) {
    console.log("error: ", error);
    
}
   
}

//22222222222222nd one country

let searchNews = async(query) => {
    //let url = "https://masai-mock-api.herokuapp.com/news?q={query}" 
 try {
     let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    // let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)
     let data = await res.json()
    // console.log("data: ", data);
    return data;

    
 
 
 
 } catch (error) {
     console.log("error: ", error);
     
 }
    
 }
 


//#########Append part############

let arrnews=[]
let appendNews = (data,container) => {
    data.forEach(({title,urlToImage,description,content})=>{
        let div = document.createElement("div")
        div.setAttribute("class" ,"box")
        div.addEventListener("click", function(){

            let obj={
                title:title,
                urlToImage:urlToImage,
                description:description,
                content:content,

            }


            //arrnews.push(title,urlToImage,description,content)
            arrnews.push(obj)
            localStorage.setItem("news", JSON.stringify(arrnews));
            window.location.href ="news.html"
        })
        let img = document.createElement("img")
        let h2 = document.createElement("h3")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

         img.src=urlToImage
         h2.innerText = title;
         h3.innerText = description
         p.innerText=content

       
         div.append(img,h2,h3,p)
         container.append(div)
    })
}



export {searchCountry, appendNews, searchNews}