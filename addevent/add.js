const nome = document.querySelector(".nome");
const btn = document.querySelector("button")

function changeColor(color){
    nome.style.color = color;
}

btn.addEventListener("click", function(){
    nome.style.color = "blue";
});