
function validarlogin() {
    const inputEmail = document.getElementById("campo_email")
    const inputSenha = document.getElementById("campo_senha")


    if (inputEmail.value !== "felipe@gmail.com" && inputSenha.value !== "123f") {
        alert("Email ou senha incorretos");
        
    }
    else {
        botao_entrar = window.open("~/../Parte2.html");
        
    }
 
}
function mostrarNome (nomeUsuario){
    document.write('olá ', nomeUsuario, ',saja bem-vindo(a)!')
}
