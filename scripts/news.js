// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

import {appendNews,searchNews} from "../components/fetch.js";

let n= document.getElementById("navbar")
n.innerHTML = navbar()

let news = JSON.parse(localStorage.getItem("news"))
console.log("news: ", news);

function append(){
    let container = document.getElementById("detailed_news")
    container.innerHTML=null;
    news.map(function(el){
       // console.log("ggg",el.title)
       let div = document.createElement("div")
       div.setAttribute("class" ,"box")
       let img = document.createElement("img")
       let h2 = document.createElement("h3")
       let h3 = document.createElement("h3")
       let p = document.createElement("p")

        img.src=el.urlToImage
        h2.innerText = el.title;
        h3.innerText = el.description
        p.innerText=el.content

      
        div.append(img,h2,h3,p)
        container.append(div)
    })
}

append()


let query;
let search = (e) => {
    if(e.key == "Enter"){
        query=null;
        query = document.getElementById("search_input").value;
         localStorage.setItem("query",JSON.stringify(query))
 
         window.location.href="search.html";
      //  let query = document.getElementById("search_input").value;
        //console.log("query: ", query);
        searchNews(query).then((data) => {
           console.log("data: ", data);
           let container = document.getElementById("detailed_news")
            container.innerHTML = null;
           appendNews(data.articles, container)
           

        });

        
    }
}



document.getElementById("search_input").addEventListener("keydown", search)
