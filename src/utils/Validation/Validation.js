let errors = {
  emailError: null,
  firstNameError: null,
  lastNameError: null,
};

// export function emailChecker(value) {
//   if (
//     value.length > 0 &&
//     !value.match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     )
//   ) {
//     errors.emailError = "Email format is invalid";
//   } else {
//     errors.emailError = null;
//   }
// }

// export function inputTextChecker(input, value) {
//   if (
//     value.length > 0 &&
//     !value.match(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?/~\\s]+$/) &&
//     input === "firstname"
//   ) {
//     errors.firstNameError =
//       "There must be no digits or specials characters here";
//   } else if (
//     value.length > 0 &&
//     !value.match(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?/~\\s]+$/) &&
//     input === "lastname"
//   ) {
//     errors.lastNameError =
//       "There must be no digits or specials characters here";
//   } else {
//     errors.firstNameError = null;
//     errors.lastNameError = null;
//   }
// }

export function inputTextChecker(input, value) {
  if (input === "email") {
    if (
      value.length > 0 &&
      !value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errors.emailError = "Email format is invalid";
    } else {
      errors.emailError = null;
    }
  } else if (
    value.length > 0 &&
    !value.match(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?/~\\s]+$/)
  ) {
    if (input === "firstname") {
      errors.firstNameError = "No digits or special characters here";
    } else if (input === "lastname") {
      errors.lastNameError = "No digits or special characters here";
    }
  } else {
    if (input === "firstname") {
      errors.firstNameError = null;
    } else if (input === "lastname") {
      errors.lastNameError = null;
    }
  }
}

export function displayErrorMessage() {
  const clearErrors = () => {
    document
      .querySelectorAll(".email-container span")
      .forEach((el) => el.remove());
    document
      .querySelectorAll(".firstname-container span")
      .forEach((el) => el.remove());
    document
      .querySelectorAll(".lastname-container span")
      .forEach((el) => el.remove());
  };

  const showError = (container, error) => {
    const errorMessage = document.createElement("span");
    if (error) {
      errorMessage.classList.add("error-message");
      errorMessage.textContent = error;
      container.appendChild(errorMessage);
    }
  };

  clearErrors();

  const emailInputContainer = document.body.querySelector(".email-container");
  const firstNameInputContainer = document.body.querySelector(
    ".firstname-container"
  );
  const lastNameInputContainer = document.body.querySelector(
    ".lastname-container"
  );

  if (errors) {
    showError(emailInputContainer, errors.emailError);
    showError(firstNameInputContainer, errors.firstNameError);
    showError(lastNameInputContainer, errors.lastNameError);
  }
}
