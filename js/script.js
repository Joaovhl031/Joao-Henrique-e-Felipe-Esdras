function ValidarLogin() {
    const inputEmail = document.getElementById("email")
    const inputSenha = document.getElementById("senha")

    if (inputEmail.value !== "joao@gmail.com" && inputSenha.value !== "123j") {
        alert("Email ou Senha incorretos!");
    }
    else {
        button_login = window.open("~/../ptII.html");
    }
}
var count = 0
function mostrarNome(nomeUsuario){
    document.write('ola ',nomeUsuario,' ,seja bem-vindo(a)!')
}
function logout(){
    localStorage.removeItem('token')
}
$(function(){
    let task_list = $("#task_list")
    $( "#myForm" ).submit(function( event ){
        let valuesInForm = $(this).serializeArray();
        console.table(valuesInForm);
        if(count<=6) {
            $("#taskTable").append('<tr> <td>'+valuesInForm[0].value+'</td>'+
            '<td>'+valuesInForm[1].value+'</td>'+
            '<td>'+valuesInForm[2].value+'</td> </tr>')
        }
        else{
            alert("o limite foi atingido!")
        }
        count += 1
        event.preventDefault();
    });
});