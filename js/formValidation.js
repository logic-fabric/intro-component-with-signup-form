export function isValidEmail(email) {
  const REGEX_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return REGEX_PATTERN.test(email);
}

export function isValidName(name) {
  return name.length > 0;
}

export function isValidPassword(password) {
  return password.length >= 8;
}
