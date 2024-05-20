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

//Modals
document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('.modal-button');
    const closeButtons = document.querySelectorAll('.close');

    modalButtons.forEach(button => {
        button.onclick = () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        }
    });

    closeButtons.forEach(button => {
        button.onclick = () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        }
    });

    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    }
});