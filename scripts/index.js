// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

import {searchCountry, appendNews, searchNews} from "../components/fetch.js";

let n = document.getElementById("navbar")
n.innerHTML = navbar()


let query;
let search = (e) => {
    
    if(e.key == "Enter"){
        query=null;
       query = document.getElementById("search_input").value;
        localStorage.setItem("query",JSON.stringify(query))

        window.location.href="search.html";

        //console.log("query: ", query);
        searchNews(query).then((data) => {
           console.log("data: ", data);
           
         //  arrNews.push(data.articles)

        //    localStorage.setItem("news", JSON.stringify(arrNews));

        //    localStorage.removeItem("news");
           let container = document.getElementById("results")
            container.innerHTML = null;
           appendNews(data.articles, container)
           
          // window.location.href = "search.html"

        });

      
    }
}

document.getElementById("search_input").addEventListener("keydown", search)


//####Country wise
let country = document.getElementById("sidebar").children;

for(let el of country){
    el.addEventListener("click", CountrySearch)
}

function CountrySearch() {
    //console.log(this.id)
    
    searchCountry(this.id).then((data) => {
        console.log("data: ", data);
        let container = document.getElementById("results")
        container.innerHTML = null;

        appendNews(data.articles, container)
        

     })

}

//#######By Default######## India Page#####
searchCountry("in").then((data) => {
   
    console.log("data: ", data);
    let container = document.getElementById("results")
    container.innerHTML = null;

    appendNews(data.articles, container)
    

 })