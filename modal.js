const nameRegex = /^[a-zA-Z]{2,}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const birthdateRegex = /^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^\d+$/;

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

//Récupere la croix du HTML
const modalBtnClose = document.querySelector(".close");
const modalForm = document.getElementById("modal-form");

modalBtnClose.addEventListener("click", () => {
    modalForm.style.display = "block";

    const message = document.querySelector(".message-success");
    const btnClose = document.querySelector(".btn-submit-close");

    if (message && btnClose) {
        message.remove();
        btnClose.remove();
    }

    modalbg.style.display = "none";
});

let btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const selectedLocation = document.querySelector('input[type="radio"][name="location"]:checked');

    const locationField = formValues.find((formValue) => formValue.type === "location");
    if (locationField) {
        locationField.formInput = selectedLocation;
    }
    // Ajoutez la valeur du bouton radio sélectionné à formValues
    let isOk = checkEntriesValues(formValues);

    if (isOk) {
        modalForm.reset();

        // Le formulaire est valide, masquer le formulaire et afficher le message de succès
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
            modalForm.style.display = "block";
            document.querySelector(".message-success").remove();
            document.querySelector(".btn-submit-close").remove();
            modalbg.style.display = "none";
        });
    }
});

/**
 * vérifie les valeurs entrées dans le formulaire
 * @param {array}
 * @returns {boolean} -si true, tous les champs sont corrects, si false si au moins 1 champs est incorrect
 */
function checkEntriesValues(formValues) {
    let resultTest = true;
    for (const formValue of formValues) {
        if (formValue.regex) {
            if (!formValue.formInput || !formValue.regex.test(formValue.formInput.value)) {
                showMessageError(formValue.formInput, formValue.errorMessage);
                resultTest = false;
            } else {
                hideMessageError(`${formValue.formInput.id}-error`);
            }
        } else {
            //si pas regex test des valeurs radio +  checkbox
            if (!formValue.formInput || !formValue.formInput.checked) {
                showMessageError(formValue.formInput, formValue.errorMessage);
                resultTest = false;
            } else {
                let id;
                if (formValue.type === "location") {
                    id = "location-error";
                } else if (formValue.type === "checkbox") {
                    id = "checkbox1-error";
                } else {
                    id = `${formValue.formInput.id}-error`;
                }
                hideMessageError(id);
            }
        }
    }
    console.log(formValues);

    // Vérifieries i CGU son checken -si non showMesseg +  resultTest = false;
    return resultTest;
}

function showMessageError(inputError, errorMessage) {
    let id;
    if (!inputError) {
        id = "location-error";
    } else {
        id = `${inputError.id}-error`;
    }
    let errorElt = document.getElementById(id);
    errorElt.style.display = "block";
    errorElt.textContent = errorMessage;
}

function hideMessageError(idError) {
    let errorElt = document.getElementById(idError);
    if (errorElt) {
        errorElt.textContent = "";
        errorElt.remove();
    }
}
