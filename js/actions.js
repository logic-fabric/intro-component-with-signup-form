import {
  isValidEmail,
  isValidName,
  isValidPassword,
} from "./formValidation.js";

const FIELD_VALIDATION = {
  "first-name": isValidName,
  "last-name": isValidName,
  email: isValidEmail,
  password: isValidPassword,
};

export function giveFocusTo(element) {
  element.focus();
}

export function checkInputValidity(inputId) {
  const input = document.getElementById(inputId);
  const isValidInput = FIELD_VALIDATION[inputId](input.value);

  if (!isValidInput) {
    const errorMessage = document.getElementById(`${inputId}-error`);

    errorMessage.classList.add("show");
  }
}

export function hideErrorMessage(inputId) {
  const errorMessage = document.getElementById(`${inputId}-error`);

  errorMessage.classList.remove("show");
}
