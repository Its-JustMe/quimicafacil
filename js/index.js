const btnHamburguer = document.querySelector('.menu-hamburguer');
const menuIcon = document.querySelectorAll('[data-animar]');
const animacao = 'animate';

/** Função que abre/fecha o menu mobile */
function menuHamburguer() {
    menuIcon.forEach((element) => {
      if (!element.classList.contains(animacao)) {
        element.classList.add(animacao);
        if (element.dataset.animar === "menu") {
          element.classList.remove("out");
        }
      } else {
        element.classList.remove(animacao);
        if (element.dataset.animar === "menu") {
          element.classList.add("out");
        }
      }
    });
}  

// Adicionando um listener para quando o botão hamburguer é clicado
btnHamburguer.addEventListener('click', () => menuHamburguer());
