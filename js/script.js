// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// // show input error message
// const showError = (input, message) => {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control error ';
//   const small = formControl.querySelector('small');
//   small.innerText = message;
// };

// // show sauccess message
// const showSuccess = (input) => {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// };

// // check email is valid
// const checkEmail = (input) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Email is not valid')
//   }
// };

// // check required fields
// const checkRequired = (inputArr) => {
//   inputArr.forEach((input) => {
//     if (input.value.trim() === '') {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSuccess(input);
//     }
//   });
// };

// // Check input length
// const checkLength = (input, min, max) => {
//   if (input.value.length < min) {
//     showError(input,
//       `${getFieldName(input)} must be at least ${min} characters`);
//   } else if (input.value.length > max) {
//     showError(input,
//       `${getFieldName(input)} must be less than  ${max} characters`);
//   } else {
//     showSuccess(input);
//   }
// };

// // Check password match
// const checkPasswordMatch = (input1, input2) => {
//   if (input1.value !== input2.value) {
//     showError(input2, 'Please do not match');
//   }
// };

// // get fieldname
// const getFieldName = (input) => {
//   //! с заглавной буквы
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// };

// // event listener
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   checkRequired([username, email, password, password2]);
//   checkLength(username, 3, 15);
//   checkLength(password, 6, 25);
//   checkEmail(email);
//   checkPasswordMatch(password, password2);
// });

// show input error message
// show sauccess message

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const container = document.querySelector(".container");
const endText = document.querySelector(".end-text");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getElementById(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length > max) {
    showError(
      input,
      `${getElementById(input)} Не должно быть больше, чем ${max}`
    );
  } else if (input.value.length < min) {
    showError(
      input,
      `${getElementById(input)} Не должно быть меньше, чем ${min}`
    );
  } else {
    showSuccess(input);
  }
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Is not valid");
  }
}

function checkMatchPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "is not match");
  }
}

function everithingOk() {
  container.classList.add("successfull");
  endText.classList.add("opacity");
}

function getElementById(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // checkRequired([username, email, password, password2]);
  // checkLength(username, 3, 14);
  // checkLength(password, 6, 24);
  // checkEmail(email);
  // checkMatchPassword(password, password2);

  everithingOk();
});
