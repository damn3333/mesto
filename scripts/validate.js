// объявляем в переменную объект нужных классов для валидации форм
const classes = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

// объявляем переменные для функций валидации
const formElement = document.querySelector(`${classes.formSelector}`);
const formInput = formElement.querySelector(`${classes.inputSelector}`);
const formError = formElement.querySelector(`.${formInput.id}-error`);

// объявляем функцию показа ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(`${classes.inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${classes.errorClass}`);
};

// объявляем функцию скрытия ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`${classes.inputErrorClass}`);
  errorElement.classList.remove(`${classes.errorClass}`);
  errorElement.textContent = '';
};

// объявляем функцию проверки поля формы на валидность
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// объявляем функцию проверки ВСЕХ полей формы на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// объявляем функцию изменения статуса кнопки submit в зависимости от валидности ВСЕХ полей формы
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${classes.inactiveButtonClass}`);
  } else {
    buttonElement.classList.remove(`${classes.inactiveButtonClass}`);
  }
};

// объявляем функцию, которая добавляет обработчики всем полям формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(`${classes.inputSelector}`));
  const buttonElement = formElement.querySelector(`${classes.submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// объявляем основную функцию проверки валидации, которая добавляет обработчики всем формам
const enableValidation = (classesObj) => {
  const formList = Array.from(document.querySelectorAll(`${classes.formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

// вызываем функцию проверки валидации всех форм с параметром нужных классов
enableValidation(classes);
