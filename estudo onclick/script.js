//manipulando eventos de botoes 
//criar uma função que realize algo quando botão for clicado 

function msg(){
    alert("Voce clicou no botão!");
}

//pegar o elemento e usaro metodo addevent ouvir  o evento do botão
const btn = document.getElementById('btn');
btn.addEventListener("click", msg);


//criando hover do botão
btn.addEventListener("mouseover", function(){
    //mouse passa por cima
btn.style.backgroundColor = "Red";
});
btn.addEventListener("mouseout", function(){
    //mouse fora
    btn.style.backgroundColor = "";
    });
    
