// Troca a cor do fundo da página
function trocar(cor){
    document.body.style.background =cor;
}

//Função da página contato
function validateForm() {
    let nome = document.getElementById("Nome").value;
    let telefone = document.getElementById("Telefone").value;
    let email = document.getElementById("Email").value;
    if (nome == "" || telefone == "" || email == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

//Função da página login
function validar(){

    //declarando as variaveis 
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;

    if(usuario ==="Admin" && senha ==="12345"){
        window.open("quiz.html")
    }else{
        alert("usuario e senha inválidos")
    }


}