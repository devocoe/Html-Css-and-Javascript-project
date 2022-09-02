function validateForm() {
  const { name, email, password } = document.forms["register-form"];

  removeError(name);
  removeError(email);
  removeError(password);

  // validating name
  if (name.value.length === 0) {
    showError(name, "name is required");
    return false;
  }
  if (name.value.length < 3) {
    showError(name, "name is to short");
    return false;
  }
  if (name.value.length > 30) {
    showError(name, "name is to long");
    return false;
  }

  // validating email
  if (email.value.length === 0) {
    showError(email, "email is required");
    return false;
  }
  if (email.value.length > 50) {
    showError(email, "email is to long");
    return false;
  }

  // validating password
  if (password.value.length === 0) {
    showError(password, "password is required");
    return false;
  }
  if (password.value.length < 6) {
    showError(password, "password should be minimum 6 character");
    return false;
  }
  if (password.value.length > 30) {
    showError(password, "password should be maximum 30 character");
    return false;
  }

  return true;
}

function showError(element, message) {
  element.classList.add("error");
  element.nextSibling.nextSibling.innerHTML = message;
}

function removeError(element) {
  element.classList.remove("error");
  element.nextSibling.nextSibling.innerHTML = "";
}
