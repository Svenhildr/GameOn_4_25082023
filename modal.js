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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**launch modal form
 * permet d'afficher la modale
 *
 * @returns {void}
 */
function launchModal() {
  modalbg.style.display = "block";
}
//

//Récupere la croix du HTML
const modalBtnClose = document.querySelector(".close");
// console.log(modalBtnClose);

modalBtnClose.addEventListener("click", () => {
  // console.log("clique");
  modalbg.style.display = "none";
});

const nameRegex =
  /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]) {2,}([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const birtdateRegex = /^([0-2][0-9]|(3)[0-1])(((0)[0-9])|((1)[0-2]))\d{4}$/;
const quantityRegex = /^[0-9]*$/;

let btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  //récupération des éléments du DOM

  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="location"]'
  );

  let selectedValue = null;
  //coucou

  // Parcourez les boutons radio pour trouver celui qui est sélectionné
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      selectedLocation = radioButton.value;
    }
  });

  // Ajoutez la valeur du bouton radio sélectionné à formValues

  const formValues = [
    {
      formValue: document.getElementById("first").value,
      regex: nameRegex,
      errorMessage:
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    },
    {
      formValue: document.getElementById("last").value,
      regex: nameRegex,
      errorMessage:
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    },
    {
      formValue: document.getElementById("email").value,
      regex: emailRegex,
      errorMessage: "Veuillez entrer une adresse mail valide",
    },
    {
      formValue: document.getElementById("birthdate").value,
      regex: birtdateRegex,
      errorMessage: "Vous devez entrer votre date de naissance.",
    },
    {
      formValue: document.getElementById("quantity").value,
      regex: quantityRegex,
      errorMessage: "Vous devez entrer un nombre valide de participations.",
    },
    {
      formValue: document.getElementById("checkbox1").value,
      regex: null,
      errorMessage:
        "Vous devez vérifier que vous acceptez les termes et conditions.",
    },
  ];

  formValues.push({
    formValue: selectedLocation,
    regex: null,
    errorMessage: "Vous devez choisir une option.",
  });
  console.log(formValues);
});

/**
 * vérifie les valeurs entrées dans le formulaire
 * @param {}
 * @returns {boolean} -si true, tous les champs sont corrects
 */
function checkEntriesValues() {}


