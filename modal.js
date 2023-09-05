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

/* regex formulaire kanap

    

    const addressRegex =
      /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]*$/;

    //code postal + ville
    const cityRegex =
      /^([0-9]{5}).[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        //on récupère les éléments du DOM
    let firstNameForm = document.getElementById("firstName");
    let lastNameForm = document.getElementById("lastName");
    let addressForm = document.getElementById("address");
    let cityForm = document.getElementById("city");
    let emailForm = document.getElementById("email");

    // Vérifie le prénom
    firstNameForm.addEventListener("change", (e) => {
      textInput(nameRegex, firstNameForm.value, "firstNameErrorMsg");
    });

    // Vérifie nom de famille
    lastNameForm.addEventListener("change", (e) => {
      textInput(nameRegex, lastNameForm.value, "lastNameErrorMsg");
    });

    // Vérifie l'addresse
    addressForm.addEventListener("change", (e) => {
      textInput(addressRegex, addressForm.value, "addressErrorMsg");
    });

    // Vérifie le code postal et la ville
    cityForm.addEventListener("change", (e) => {
      textInput(cityRegex, cityForm.value, "cityErrorMsg");
    });

    // Vérifie l'email
    emailForm.addEventListener("change", (e) => {
      textInput(emailRegex, emailForm.value, "emailErrorMsg");
    });

    //récupère le bouton dans le DOM et fait un eventListener au click
    let button = document.getElementById("order");
    button.addEventListener("click", postForm);

    //contrôle des paramètres regex, valeur et messages d'erreur pour valider un champs
    function textInput(regex, value, idError) {
      if (!regex.test(value)) {
        msgError(idError);
        return false;
      } else {
        clearError(idError);
        return true;
      }
    }

    function testAllInput() {
      if (
        textInput(nameRegex, firstNameForm.value, "firstNameErrorMsg") &&
        textInput(nameRegex, lastNameForm.value, "lastNameErrorMsg") &&
        textInput(addressRegex, addressForm.value, "addressErrorMsg") &&
        textInput(cityRegex, cityForm.value, "cityErrorMsg") &&
        textInput(emailRegex, emailForm.value, "emailErrorMsg")
      ) {
        return true;
      } else {
        return false;
      }
    }
    */
