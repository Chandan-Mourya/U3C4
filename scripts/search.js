// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

import {appendNews, searchNews} from "../components/fetch.js";

let n= document.getElementById("navbar")
n.innerHTML = navbar()


let query=JSON.parse(localStorage.getItem("query"))
console.log("query: ", query);
searchNews(query).then((data) => {
    console.log("data: ", data);
    let container = document.getElementById("results")
     container.innerHTML = null;
    appendNews(data.articles, container)
    

 });


let search = (e) => {
    if(e.key == "Enter"){
       query = document.getElementById("search_input").value;
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
