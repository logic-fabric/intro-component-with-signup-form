export function isValidEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export function isValidName(name) {
  return name.length > 0;
}

export function isValidPassword(password) {
  return password.length >= 8;
}
