/*
  1. Fermer la modale (avec le x et clique extérieur)
  2. Implémenter entrées du formulaire
  3.
  4.
  5.
*/
const form = document.getElementById('formulaire');//la valeur ne varie pas, on utilise const

const first = document.getElementById('first');
const errorfirst = document.getElementById('errorfirst');

const last = document.getElementById('last');
const errorlast = document.getElementById('errorlast');

const email = document.getElementById('email');
const erroremail = document.getElementById('erroremail');

const birthdate = document.getElementById('birthdate');
const errorbirthdate = document.getElementById('errorbirthdate');

const quantity = document.getElementById('quantity');
const errorquantity = document.getElementById('errorquantity');

let locationChecked = document.querySelector('input[name="location"]:checked');
let errorlocation = document.getElementById('errorlocation');

const checkbox1 = document.getElementById('checkbox1');
const errorcheckbox1 = document.getElementById('errorcheckbox1');

const modal2 = document.querySelector('#modal2');

let buttonSign = document.querySelector("#button-sign");

const submitForm = (event) => {
  event.preventDefault();
  if (!email.validity.valid) {
    // S'il est invalide, on affiche un message d'erreur personnalisé
    erroremail.innerHTML = "J'attends une adresse e-mail correcte, cher gamer&nbsp;!";
    erroremail.className = "error active";
    // Et on empêche l'envoi des données du formulaire
  }
  if (!first.validity.valid) {
    errorfirst.innerHTML = "Insérer au moins deux caractère";
    errorfirst.className = "error active";
  }
  if (!last.validity.valid) {
    errorlast.innerHTML = "Mettez votre nom s'il vous plaît";
    errorlast.className = "error active";
  }
  if (!birthdate.validity.valid) {
    errorbirthdate.innerHTML = "T'es pas un poisson pané alors donne ta date de fabrication&nbsp;!";
    errorbirthdate.className = "error active";
  }
  if (!quantity.validity.valid) {
    errorquantity.innerHTML = "Avoue combien de tournois auquel tu as participé cher gamer&nbsp;!";
    errorquantity.className = "error active";
  }
  if (!locationChecked) {
    errorlocation.innerHTML = "Un tournoi!";
    errorlocation.className = "error active";
  } 
  if (!checkbox1.checked) {
    errorcheckbox1.innerHTML = "Cocher!";
    errorcheckbox1.className = "error active";
  }
  if (checkbox1.checked && locationChecked && quantity.validity.valid) {
    event.preventDefault();
    //form.submit();
    console.log("submit");
    form.reset();
    console.log("reset");
    closeModal();
    displayThanks(event);
  }
};

buttonSign.addEventListener("click", (event)=>{
  event.preventDefault();
  submitForm(event);
});

form.addEventListener('submit', (event)=>{
  console.log("Blablabla");
  event.preventDefault();
  form.submit();
  closeModal();
})


/*
window.addEventListener('load', (event)=>{
  console.log("blabla");
});*/

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

/*
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
*/

let inscription = document.querySelector('#inscription');

inscription.addEventListener("click", (event) =>{
  event.preventDefault();
  launchModal();
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
/*
1. Selectionner le bouton (x) (span, classe : close)
2. Ajout de l'évenement Onclick sur boutton close
3. On cache la modale lors du clic
*/

document.querySelector("span.close").addEventListener('click', closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM entièrement chargé et analysé");
  //modal2.style.display = "none";
});

/*
(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
- ajout de required en html
- minlength="2" en html (existant)
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
- ajout de required en html
- minlength="2" en html
(3) L'adresse électronique est valide.
- type="email"
- required
(4) Pour le nombre de concours, une valeur numérique est saisie.
- type="number"
- required
(5) Un bouton radio est sélectionné.
- required
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
- required 
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

Prenom 
Id = first 
Nom 
Id = last
Email 
Id = email
Date de naissance
Id = birthdate
Nombre concours 
Id  = quantity
Bouton radio 
Id = location1
Condition générale d'utilisation
For = checkbox1
*/

// prenom
//nom
//email

//prenom

first.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (first.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    errorfirst.innerHTML = ""; // On réinitialise le contenu
    errorfirst.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);
//false : ne pas capturer l'évènement


//nom

last.addEventListener("input", function (event) {

  if (last.validity.valid) {
    errorlast.innerHTML = "";
    errorlast.className = "error";
  }
}, false);

//email

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    erroremail.innerHTML = "";
    erroremail.className = "error";
  }
  
}, false);

//Date de naissance

birthdate.addEventListener("input", function (event) {
  if (birthdate.validity.valid) {
    errorbirthdate.innerHTML = ""; 
    errorbirthdate.className = "error";
  }
  
}, false);

//Date de naissance

quantity.addEventListener("input", function (event) {
  if (quantity.validity.valid) {
    errorquantity.innerHTML = "";
    errorquantity.className = "error";
  }
  
}, false);

//Le tournoi de l'année choisi

document.querySelectorAll('input[type="radio"]').forEach(element => {
  element.addEventListener('click', function (event){
      errorlocation.innerHTML = "";
      errorlocation.className = "error";
      locationChecked=true;
  })
});

//Condition utilisation

checkbox1.addEventListener("input", function (event) {
  if (checkbox1.checked) {
    errorcheckbox1.innerHTML = "";
    errorcheckbox1.className = "error";
  }
}, false);

const createModal = () => {
  let button = document.createElement('button');
  button.textContent = "Fermer";
  button.className = "btn-signup modal-btn";
  //modal2.setAttribute("class", "bground");
  button.addEventListener("click", closeModal2);
  modal2.setAttribute("style" , "display:flex");
  modal2.innerHTML = "<div class='textCenter'><div class='verticalAlign'>Merci pour </br>votre inscription</div></div>";
  //+classecss
  modal2.appendChild(button);
};

const closeModal2 = () => {
  modal2.style.display = "none";
};

//closemodal

const displayThanks = (event) =>{
  event.preventDefault();
  console.log("Thanks");
  createModal();
}
  
  
  /*checkbox1.checked = false;
  let modal2 = document.querySelector('#modal2');
  if (modal2.innerHTML=="") {
    modal2.innerHTML = "<div class='textCenter'><div class='verticalAlign'>Merci pour </br>votre inscription</div></div>";
    console.log("pas vide");
  }
  else {
    modal2.innerHTML="";
    console.log("vide");
  }
  let button = document.createElement('button');
  button.onclick = closeModal;
  button.textContent = "Fermer";
  button.className = "btn-signup modal-btn";
  button.setAttribute("type", "reset");
  //+classecss
  modal2.appendChild(button);*/
