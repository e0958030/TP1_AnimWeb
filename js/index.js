/* Code JavaScript pour le TP1 par Camilia El Moustarih */

/* Pour enlever à l'utilisateur la possibilité de naviguer dans la page lorsque le menu est ouvert */
let checkbox = document.querySelector("#checkboxBoutonBurger");

let body = document.querySelector("body");

checkbox.addEventListener("click", defilArret)

/*Fonction pour bloquer le défilement lorsque le menu est ouvert*/ 
function defilArret(event){
    if (checkbox.checked == true) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "scroll";
    }
}

/* Afin de pouvoir fermer le menu lorsqu'un des boutons a été cliqué */
let boutonsA = document.querySelectorAll(".menuPrincipal a");

for (unBouton of boutonsA){
    unBouton.addEventListener("click", fermerMenu);
}

function fermerMenu(){
    checkbox.checked = false;
    body.style.overflow = "scroll"; 
}