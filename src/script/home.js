// Alerta na página principal
window.onload = function() {
    alert("Seja bem-vindo à UrbanWalk!");
}

// Realiza o slideShow
let imagens=['./src/img/tn1.png','./src/img/tn2.png','./src/img/tn3.png','./src/img/tn4.png','./src/img/chut.png'];
let index=0; 
let time =3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}

slideShow();

// Troca a cor do fundo da página
function trocar(cor){
    document.body.style.background =cor;
}