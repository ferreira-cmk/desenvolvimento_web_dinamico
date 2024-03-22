//usando expressão regulares 

function validarEmail(){ 
    //pega o valor do campo email
    email = document.getElementById("email").value;
    // criação de uma expressoa regular para validar email
    res = /\S+@\S+\.\S+/
    //teste da expressão regular com o valor do campo 
    if(res.test(email)){
        console.log("validado")
    }else{
        console.log("Não validado")
    }
}
