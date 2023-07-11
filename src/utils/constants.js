// исходный массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// элементы секции profile:
const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
const buttonOpenPopupAvatar = document.querySelector('.profile__button-avatar');
const buttonOpenPopupAddPlace = document.querySelector('.profile__button-add');
const profileNameSelector = '.profile__name';
const profileAboutSelector = '.profile__about';
const profileAvatarSelector = '.profile__avatar';

// элементы popupProfile:
const popupProfileSelector = '.popup_type_profile';
const formProfile = document.querySelector('#profile-form');
const nameInput = formProfile.querySelector('#name');
const aboutInput = formProfile.querySelector('#about');

// элементы popupAdd:
const popupAddSelector = '.popup_type_add';
const formAdd = document.querySelector('#add-form');
const placeInput = formAdd.querySelector('#new-name');
const linkInput = formAdd.querySelector('#link');

// элементы popupAvatar:
const popupAvatarSelector = '.popup_type_avatar';
const formAvatar = document.querySelector('#avatar-form');
const avatarInput = formAvatar.querySelector('#avatar');

// элементы popupPhoto:
const popupPhotoSelector = '.popup_type_photo';

// элементы popupConfirmation:
const popupConfirmationSelector = '.popup_type_confirmation';

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

export { initialCards, buttonOpenPopupProfile, buttonOpenPopupAddPlace, profileNameSelector, profileAboutSelector, popupProfileSelector, formProfile, nameInput, aboutInput, popupAddSelector, formAdd, placeInput, linkInput, popupPhotoSelector, cardsContainer, cardsContainerSelector, config, popupAvatarSelector, formAvatar, avatarInput, buttonOpenPopupAvatar, popupConfirmationSelector, profileAvatarSelector };
