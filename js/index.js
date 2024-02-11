import {
  checkFormValidity,
  checkInputValidity,
  giveFocusTo,
  hideErrorMessage,
} from "./actions.js";

const FORM_FIELDS = ["first-name", "last-name", "email", "password"];

const tryItFreeButton = document.getElementById("try-it-free-button");

tryItFreeButton.addEventListener("click", () => {
  giveFocusTo(firstNameInput);
});

for (const field of FORM_FIELDS) {
  const input = document.getElementById(field);

  input.addEventListener("blur", () => {
    checkInputValidity(field);
  });

  input.addEventListener("focus", () => {
    hideErrorMessage(field);
  });
}

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  checkFormValidity();
});
