const article = document.querySelector('#content');

function showMore(){
    if(article.className == "open"){
        article.className = "";
        button.innerHTML = "Show more";
    }else{
        article.className = "open";
        button.innerHTML = "Show less"; //mostrar menos
    }
}
