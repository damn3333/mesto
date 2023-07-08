// исходный массив карточек
const initialCards = [
  {
    place: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    place: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// элементы секции profile:
const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
const buttonOpenPopupAddPlace = document.querySelector('.profile__button-add');
const profileNameSelector = '.profile__name';
const profileJobSelector = '.profile__job';

// элементы popupProfile:
const popupProfileSelector = '.popup_type_profile';
const formProfile = document.querySelector('#profile-form');
const nameInput = formProfile.querySelector('#name');
const jobInput = formProfile.querySelector('#job');

// элементы popupAdd:
const popupAddSelector = '.popup_type_add';
const formAdd = document.querySelector('#add-form');
const placeInput = formAdd.querySelector('#place');
const linkInput = formAdd.querySelector('#link');

// элементы popupPhoto:
const popupPhotoSelector = '.popup_type_photo';

// другие элементы:
const cardsContainer = document.querySelector('.photo-grid__list');
const cardsContainerSelector = '.photo-grid__list';

// объявляем в переменную объект нужных классов для валидации форм
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

export { initialCards, buttonOpenPopupProfile, buttonOpenPopupAddPlace, profileNameSelector, profileJobSelector, popupProfileSelector, formProfile, nameInput, jobInput, popupAddSelector, formAdd, placeInput, linkInput, popupPhotoSelector, cardsContainer, cardsContainerSelector, config };
