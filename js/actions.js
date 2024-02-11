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
    const fieldWrapper = document.getElementById(`${inputId}-field-wrapper`);

    fieldWrapper.classList.add("invalid");
  }
}

export function checkFormValidity() {
  for (const field of Object.keys(FIELD_VALIDATION)) {
    checkInputValidity(field);
  }
}

export function hideErrorMessage(inputId) {
  const fieldWrapper = document.getElementById(`${inputId}-field-wrapper`);

  fieldWrapper.classList.remove("invalid");
}
