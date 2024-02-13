const initApp = () => {
  console.log("DOM Content Loaded!");
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitForm);
};

document.addEventListener("DOMContentLoaded", initApp);

const submitForm = (event) => {
  event.preventDefault();
  const fNameInput = document.getElementById("first-name");
  const lNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  let fName = fNameInput.value.trim();
  let lName = lNameInput.value.trim();
  let email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!fName) {
    // console.error("You didn't enter your first name!");
    fNameInput.removeAttribute("placeholder");
    fNameInput.classList.add("input-error-outline");
    document.getElementById("first-name-error-text").style.display = "block";
    document.getElementById("first-name-error-icon").style.display = "block";
  } else {
    fNameInput.classList.remove("input-error-outline");
    document.getElementById("first-name-error-text").style.display = "none";
    document.getElementById("first-name-error-icon").style.display = "none";
    fName = fName.charAt(0).toUpperCase() + fName.slice(1);
  }

  if (!lName) {
    // console.error("You didn't enter your last name!");
    lNameInput.removeAttribute("placeholder");
    lNameInput.classList.add("input-error-outline");
    document.getElementById("last-name-error-text").style.display = "block";
    document.getElementById("last-name-error-icon").style.display = "block";
  } else {
    lNameInput.classList.remove("input-error-outline");
    document.getElementById("last-name-error-text").style.display = "none";
    document.getElementById("last-name-error-icon").style.display = "none";
    lName = lName.charAt(0).toUpperCase() + lName.slice(1);
  }

  const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
  const validEmail = regEx.test(email);
  if (email) {
    emailInput.removeAttribute("placeholder");
    emailInput.classList.remove("email-example-placeholder-color");
    emailInput.classList.remove("input-error-outline");
    document.getElementById("email-error-text").style.display = "none";
    document.getElementById("email-error-icon").style.display = "none";

    if (!validEmail) {
      //   console.error("Email you've entered is not valid!");
      emailInput.setAttribute("placeholder", "email@example.com");
      emailInput.classList.add("email-example-placeholder-color");
      emailInput.classList.add("input-error-outline");
      const invalidEmail = document.getElementById("email-error-text");
      invalidEmail.textContent = "Looks like this is not an email";
      invalidEmail.style.display = "block";
      document.getElementById("email-error-icon").style.display = "block";
    } else {
      email = email.toLowerCase();
    }
  } else {
    // console.error("You didn't enter your email!");
    emailInput.setAttribute("placeholder", "email@example.com");
    emailInput.classList.add("email-example-placeholder-color");
    emailInput.classList.add("input-error-outline");
    const invalidEmail = document.getElementById("email-error-text");
    invalidEmail.textContent = "Email cannot be empty";
    invalidEmail.style.display = "block";
    document.getElementById("email-error-icon").style.display = "block";
  }

  if (!password) {
    // console.error("You didn't enter your password!");
    passwordInput.removeAttribute("placeholder");
    passwordInput.classList.add("input-error-outline");
    document.getElementById("password-error-text").style.display = "block";
    document.getElementById("password-error-icon").style.display = "block";
  } else {
    passwordInput.classList.remove("input-error-outline");
    document.getElementById("password-error-text").style.display = "none";
    document.getElementById("password-error-icon").style.display = "none";
  }

  if (fName && lName && validEmail && password) {
    const form = document.getElementById("form");

    form["first-name"].value = fName;
    form["last-name"].value = lName;
    form["email"].value = email;
    form.submit();
  }
};
