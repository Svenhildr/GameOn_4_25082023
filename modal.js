//regex
const nameRegex = /^[a-zA-Z]{2,}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const birthdateRegex = /^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^\d+$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");
const modalForm = document.getElementById("modal-form");
const btnSubmit = document.querySelector(".btn-submit");

const formValues = [
    {
        type: "",
        formInput: document.getElementById("first"),
        regex: nameRegex,
        errorMessage: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    },
    {
        type: "",
        formInput: document.getElementById("last"),
        regex: nameRegex,
        errorMessage: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    },
    {
        type: "",
        formInput: document.getElementById("email"),
        regex: emailRegex,
        errorMessage: "Veuillez entrer une adresse mail valide",
    },
    {
        type: "",
        formInput: document.getElementById("birthdate"),
        regex: birthdateRegex,
        errorMessage: "Vous devez entrer votre date de naissance.",
    },
    {
        type: "",
        formInput: document.getElementById("quantity"),
        regex: quantityRegex,
        errorMessage: "Vous devez entrer un nombre valide de participations.",
    },
    {
        type: "location",
        formInput: document.querySelector('input[type="radio"][name="location"]:checked'),
        regex: null,
        errorMessage: "Vous devez choisir une option.",
    },
    {
        type: "checkbox",
        formInput: document.getElementById("checkbox1"),
        regex: null,
        errorMessage: "Vous devez vérifier que vous acceptez les termes et conditions.",
    },
];

function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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

/**launch modal form
 * permet de fermer la modale au click sur la croix
 *
 * @returns {void}
 */
modalBtnClose.addEventListener("click", () => {
    modalbg.style.display = "none";
    closeAndResetModal();
});

/**
 * gère la fermeture de la fermeture de la modale en cliquant sur la croix
 * permet aussi de fermer le message de succes
 *
 * @returns {void}
 */

<<<<<<< HEAD
function closeAndResetModal() {
    modalForm.style.display = "block";

    const message = document.querySelector(".message-success");
    const btnClose = document.querySelector(".btn-submit-close");
    const modalBtnClose = document.querySelector(".close");

    if (message && btnClose) {
        message.remove();
        btnClose.remove();
    }

    modalbg.style.display = "none";
}

//listener pour les elts input
formValues.forEach((element) => {
    addInputEventListener(element);
});

addInputRadioListener();

//listener sur le bouton de soumission pour envoyer le formulaire
modalForm.addEventListener("submit", (e) => {
    handleSubmit(e);
});

function checkBtnRadio() {
    const selectedLocation = document.querySelector('input[type="radio"][name="location"]:checked');

    // stock l'élément radio choisi pour la localisation

    const locationField = formValues.find((formValue) => formValue.type === "location");

    if (locationField) {
        locationField.formInput = selectedLocation;
    }
}

//gestionnaire de siumission de formulaire
function handleSubmit(e) {
    e.preventDefault();

    checkBtnRadio();

    // Ajoute la valeur du bouton radio sélectionné à formValues
    let isOk = checkEntriesValues(formValues);

    if (isOk) {
        handleSuccess(e);
        console.log("formulaire envoyé avec succès !");
    }
}

function addInputEventListener(formValue) {
    if (formValue.formInput) {
        formValue.formInput.addEventListener("input", () => {
            if (formValue.formInput) {
                checkEntriesValues(formValues);
            }
        });
    }
}

function addInputRadioListener() {
    const radioBtn = document.querySelectorAll(".checkbox-input[type ='radio']");
    for (const radio of radioBtn) {
        radio.addEventListener("input", () => {
            checkBtnRadio();
            checkEntriesValues(formValues);
        });
    }
}

function handleSuccess(e) {
    modalForm.reset();

    // Le formulaire est valide, masque le formulaire et affiche le message de succès
    const modalBody = document.querySelector(".modal-body");
    modalForm.style.display = "none";

    let message = document.createElement("p");
    message.innerHTML = "Merci pour votre inscription";
    message.classList.add("message-success");
    modalBody.appendChild(message);

    let formCloseBtn = document.createElement("button");
    formCloseBtn.textContent = "Fermer";
    formCloseBtn.classList.add("btn-submit");
    formCloseBtn.classList.add("btn-submit-close");
    modalBody.appendChild(formCloseBtn);

    formCloseBtn.addEventListener("click", (e) => {
        closeAndResetModal();
    });
}

/**
 * vérifie les valeurs entrées dans le formulaire
 * @param {array}
 * @returns {boolean} -si true, tous les champs sont corrects, si false si au moins 1 champs est incorrect
 */
function checkEntriesValues(formValues) {
    let resultTest = true;

    for (const { formInput, regex, type, errorMessage } of formValues) {
        const isValid = regex ? formInput && regex.test(formInput.value) : formInput && formInput.checked;

        if (!isValid) {
            showMessageError(formInput, errorMessage);
            resultTest = false;
        } else if (type === "checkbox" && !formInput.checked) {
            showMessageError(formInput, errorMessage);
            resultTest = false;
        } else {
            const id = type === "location" ? "location-error" : type === "checkbox" ? "checkbox1-error" : `${formInput.id}-error`;
            hideMessageError(id);
        }
    }

    return resultTest;
}

/**
 * Affiche un message d'erreur pour l'entrée spécifiée
 *
 * @param {HTMLElement} inputError - L'élément d'entrée pour lequel afficher l'erreur
 * @param {string} errorMessage - Le message d'erreur à afficher
 * @returns {void}
 */

function showMessageError(formInput, errorMessage) {
    let idFormError = formInput ? `${formInput.id}-error` : "location-error";
    let errorElt = document.getElementById(idFormError);

    if (errorElt) {
        errorElt.style.display = "block";
        errorElt.textContent = errorMessage;
    }
}

/**
 * Cache le message d'erreur pour l'ID spécifié
 *
 * @param {string} idError - L'ID de l'élément d'erreur à cacher
 * @returns {void}
 */

function hideMessageError(idError) {
    let errorElt = document.getElementById(idError);
    if (errorElt) {
        errorElt.textContent = "";
        errorElt.style.display = "none";
    }
}
=======

>>>>>>> main
