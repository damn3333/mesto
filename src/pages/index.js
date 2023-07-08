import './index.css';

// импортируем нужные переменные и классы из других модулей
import { initialCards, buttonOpenPopupProfile, buttonOpenPopupAddPlace, profileNameSelector, profileJobSelector, popupProfileSelector, formProfile, nameInput, jobInput, popupAddSelector, formAdd, placeInput, linkInput, popupPhotoSelector, cardsContainer, cardsContainerSelector, config } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

// вешаем слушатель на кнопку редактирования профиля
buttonOpenPopupProfile.addEventListener('click', function () {
  popupFormProfile.open();
  const profileInfo = userInfoDisplay.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;
  profileFormValidator.resetError();
});

// вешаем слушатель на кнопку добавления новой карточки
buttonOpenPopupAddPlace.addEventListener('click', () => {
  popupFormAdd.open();
  addCardFormValidator.resetError();
});

// объявляем функцию создания экземпляра карточки
function cardCreate(data) {
  const card = new Card(data, '#template-card', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
};

// объявляем функцию создания экземпляра класса открытия попапа с картинкой
function openPopupWithImage(data) {
  const popupImage = new PopupWithImage(popupPhotoSelector, data);
  popupImage.open();
  popupImage.setEventListeners();
};

// объявляем хэндл для слушателя открытия попапа с картинкой
function handleCardClick() {
  const data = {
    link: this.src,
    place: this.alt
  };
  openPopupWithImage(data);
};

// создаём новый класс валидации формы редактирования профиля и включаем ее
const profileFormValidator = new FormValidator(config, formProfile);
profileFormValidator.enableValidation();

// создаём новый класс валидации формы добавления новой карточки и включаем ее
const addCardFormValidator = new FormValidator(config, formAdd);
addCardFormValidator.enableValidation();

// экземпляр класса создания исходных карточек из массива при загрузке страницы
const defaultCardList = new Section({
  renderer: (item) => {
    const cardElement = cardCreate(item);
    defaultCardList.addItem(cardElement);
  }
}, cardsContainerSelector);

// создаём (рендерим) карточки
defaultCardList.renderItems(initialCards);

// создаём экземпляр попапа с формой редактирования профиля
const popupFormProfile = new PopupWithForm(popupProfileSelector, handleSubmitProfile);
popupFormProfile.setEventListeners();

// объявляем хэндл для класса с формой профиля
function handleSubmitProfile() {
  const inputValues = this._getInputValues();
  userInfoDisplay.setUserInfo(inputValues);
  popupFormProfile.close();
}
// создаём экземпляр попапа с формой добавления нового места
const popupFormAdd = new PopupWithForm(popupAddSelector, handleSubmitAdd);
popupFormAdd.setEventListeners();

// объявляем хэндл для класса с формой добавления нового места
function handleSubmitAdd() {
  const cardInfo = this._getInputValues();
  const cardCreated = cardCreate(cardInfo);
  cardsContainer.prepend(cardCreated);
  popupFormAdd.close();
}

// создаём класс с информацией о пользователе
const userInfoDisplay = new UserInfo({ profileNameSelector, profileJobSelector });
