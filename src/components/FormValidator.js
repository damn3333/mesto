// создаём класс валидации форм
export default class FormValidator {
    // принимаем в конструктор объект настроек с классами формы, а также ссылку на форму
    constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }

  // объявляем функцию показа ошибки
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  // объявляем функцию скрытия ошибки
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  // объявляем функцию проверки поля формы на валидность
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // объявляем функцию проверки ВСЕХ полей формы на валидность
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // объявляем функцию изменения статуса кнопки submit в зависимости от валидности ВСЕХ полей формы
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  // объявляем функцию, которая добавляет обработчики всем полям формы
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  // объявляем функцию блокировки кнопки сабмита в форме добавления новой карточки
  _disableSubmitButton() {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  // объявляем функцию обнуления ошибок валидации формы
  resetError() {
    // очищаем ошибки валидации инпутов формы
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });
    // актуализируем заблокированное состояние кнопки сабмита по-умолчанию
    this._disableSubmitButton();
  }

  // объявляем основную функцию проверки валидации, которая добавляет обработчики всем формам
  enableValidation() {
    this._setEventListeners();
  };
  }
