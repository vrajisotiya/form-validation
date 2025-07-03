(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    let isValid = true;

    if (!validateName()) {
      isValid = false;
    }
    if (!validateEmail()) {
      isValid = false;
    }
    if (!validateContact()) {
      isValid = false;
    }
    if (!validateGender()) {
      isValid = false;
    }
    if (!validateAddress()) {
      isValid = false;
    }
    if (!validateTerms()) {
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
      clearValidationStyles();
    } else {
      setTimeout(() => {
        clearValidationStyles();
      }, 3000);
    }
  });
});

function clearValidationStyles() {
  const fields = ["fullName", "email", "contactNumber", "address", "terms"];
  fields.forEach((id) => {
    const el = document.getElementById(id);
    el.classList.remove("is-valid", "is-invalid");
  });

  document
    .querySelectorAll(".custom-error")
    .forEach((el) => (el.innerText = ""));
}

// Full Name
function validateName() {
  const name = document.getElementById("fullName");
  const error = document.getElementById("fullNameError");
  const regex = /^[A-Za-z\s]+$/;

  if (name.value.trim() === "") {
    error.innerText = "Full name is required.";
    name.classList.add("is-invalid");
    return false;
  } else if (!regex.test(name.value.trim())) {
    error.innerText = "Full name must contain only letters and spaces.";
    name.classList.add("is-invalid");
    return false;
  } else {
    error.innerText = "";
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
    return true;
  }
}

// Email
function validateEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("emailError");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email.value.trim())) {
    error.innerText = "Please enter a valid email address.";
    email.classList.add("is-invalid");
    return false;
  } else {
    error.innerText = "";
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    return true;
  }
}

// Contact Number
function validateContact() {
  const contact = document.getElementById("contactNumber");
  const error = document.getElementById("contactError");
  const regex = /^\d{10}$/;

  if (!regex.test(contact.value.trim())) {
    error.innerText = "Contact number must be exactly 10 digits.";
    contact.classList.add("is-invalid");
    return false;
  } else {
    error.innerText = "";
    contact.classList.remove("is-invalid");
    contact.classList.add("is-valid");
    return true;
  }
}

// Gender
function validateGender() {
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  const error = document.getElementById("genderError");
  let selected = false;

  genderRadios.forEach((radio) => {
    if (radio.checked) selected = true;
  });

  if (!selected) {
    error.innerText = "Please select your gender.";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

// Address
function validateAddress() {
  const address = document.getElementById("address");
  const error = document.getElementById("addressError");

  if (address.value.trim().length < 10) {
    error.innerText = "Address must be at least 10 characters.";
    address.classList.add("is-invalid");
    return false;
  } else {
    error.innerText = "";
    address.classList.remove("is-invalid");
    address.classList.add("is-valid");
    return true;
  }
}

// Terms
function validateTerms() {
  const terms = document.getElementById("terms");
  const error = document.getElementById("termsError");

  if (!terms.checked) {
    error.innerText = "You must agree to the terms and conditions.";
    terms.classList.add("is-invalid");
    return false;
  } else {
    error.innerText = "";
    terms.classList.remove("is-invalid");
    return true;
  }
}
