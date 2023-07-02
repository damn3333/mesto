// импортируем нужные переменные и классы из других модулей
import { initialCards } from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js'

// элементы секции profile:
const editProfileButton = document.querySelector('.profile__button-edit');
const addPlaceButton = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

// элементы popupProfile:
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileClose = document.querySelector('.popup__button-close_profile');
const formProfile = document.querySelector('#profile-form');
const nameInput = formProfile.querySelector('#name');
const jobInput = formProfile.querySelector('#job');
const submitButtonEdit = formProfile.querySelector('.popup__button-submit');

// элементы popupAdd:
const popupAdd = document.querySelector('.popup_type_add');
const popupAddClose = document.querySelector('.popup__button-close_add');
const formAdd = document.querySelector('#add-form');
const placeInput = formAdd.querySelector('#place');
const linkInput = formAdd.querySelector('#link');
const submitButtonAdd = formAdd.querySelector('.popup__button-submit');

// элементы popupPhoto:
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoClose = document.querySelector('.popup__button-close_photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

// другие элементы:
const popupList = Array.from(document.querySelectorAll('.popup'));
const cardsContainer = document.querySelector('.photo-grid__list');

// объявляем в переменную объект нужных классов для валидации форм
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

// вешаем слушатели на кнопки закрытия попапов
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));

// вешаем слушатель на кнопку редактирования профиля
editProfileButton.addEventListener('click', function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  resetError(popupProfile, config);
});

// вешаем слушатель на кнопку добавления новой карточки
addPlaceButton.addEventListener('click', () => {
  openPopup(popupAdd);
  resetError(popupAdd, config);
  placeInput.value = '';
  linkInput.value = '';
});

// вешаем слушатель на отправку формы редактирования профиля
formProfile.addEventListener('submit', () => {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
});

// вешаем слушатель на отправку формы добавления новой карточки
formAdd.addEventListener('submit', (evt) => {
  const cardInfo = { name: placeInput.value, link: linkInput.value };

  const card = new Card(cardInfo, '#template-card');
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);

  evt.target.reset();
  submitButtonAdd.classList.add('popup__button-submit_disabled');
  closePopup(popupAdd);
});

// объявляем функцию открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// объявялем функцию закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

// объявляем функцию закрытия попапов по клику на оверлей
const closePopupOverlay = () => {
  popupList.forEach( (item) => {
    item.addEventListener('mousedown', (evt) => {
      closePopup(evt.target);
    });
  });
};

// вызываем функцию закрытия попапов по клику на оверлей
closePopupOverlay();

// объявляем функцию закрытия попапов по нажатию ESC
function closePopupEsc(evt) {
    if(evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
    };
  }

// объявляем функцию создания исходных карточек при загрузке страницы
const renderElements = () => {
  cardsContainer.innerHTML = '';
  initialCards.forEach((item) => {
    const card = new Card(item, '#template-card');
    const cardElement = card.generateCard();
    cardsContainer.append(cardElement);
  });
};

// создаём исходные карточки
renderElements();

// объявляем функцию добавления валидации всем формам (через создание новых экземпляров класса)
const validation = () => {

  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach( (item) => {
    const form = new FormValidator(config, item);
    form.enableValidation();
  });
};

// вызываем функцию валидации всех форм на странице
validation()

// объявляем функцию обнуления ошибок валидации форм
const resetError = (popup, config) => {
  const inputList = Array.from(popup.querySelectorAll(config.inputSelector));
  // очищаем ошибки валидации инпутов формы
  inputList.forEach(inputElement => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  });
  // актуализируем заблокированное состояние кнопки сабмита по-умолчанию
  const buttonElement = popup.querySelector(config.submitButtonSelector);
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};

// экспортируем используемые в других модулях переменные и функции
export { config, openPopup, popupPhoto, popupImage, popupCaption, popupPhotoClose, closePopup };
