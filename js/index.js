import {
  checkInputValidity,
  giveFocusTo,
  hideErrorMessage,
} from "./actions.js";

const tryItFreeButton = document.getElementById("try-it-free-button");

tryItFreeButton.addEventListener("click", () => {
  giveFocusTo(firstNameInput);
});

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

firstNameInput.addEventListener("blur", () => {
  checkInputValidity("first-name");
});
firstNameInput.addEventListener("focus", () => {
  hideErrorMessage("first-name");
});

lastNameInput.addEventListener("blur", () => {
  checkInputValidity("last-name");
});
lastNameInput.addEventListener("focus", () => {
  hideErrorMessage("last-name");
});

emailInput.addEventListener("blur", () => {
  checkInputValidity("email");
});
emailInput.addEventListener("focus", () => {
  hideErrorMessage("email");
});

passwordInput.addEventListener("blur", () => {
  checkInputValidity("password");
});
passwordInput.addEventListener("focus", () => {
  hideErrorMessage("password");
});
