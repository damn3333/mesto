import './index.css';

// импортируем нужные переменные и классы из других модулей
import { buttonOpenPopupProfile, buttonOpenPopupAddPlace, profileNameSelector, profileAboutSelector, popupProfileSelector, formProfile, nameInput, aboutInput, popupAddSelector, formAdd, popupPhotoSelector, cardsContainer, cardsContainerSelector, config, popupAvatarSelector, formAvatar, buttonOpenPopupAvatar, popupConfirmationSelector, avatarImage } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

// вешаем слушатель на кнопку редактирования профиля
buttonOpenPopupProfile.addEventListener('click', function () {
  popupFormProfile.open();
  const profileInfo = userInfoDisplay.getUserInfo();
  nameInput.value = profileInfo.name;
  aboutInput.value = profileInfo.about;
  profileFormValidator.resetError();
});

// вешаем слушатель на кнопку добавления новой карточки
buttonOpenPopupAddPlace.addEventListener('click', () => {
  popupFormAdd.open();
  addCardFormValidator.resetError();
});

// объявляем функцию создания экземпляра карточки
function cardCreate(data, userInfo) {
  const card = new Card(data, userInfo, '#template-card', handleCardClick, handleLike, handleDeleteClick);
  const cardElement = card.generateCard();
  return cardElement
};

// создаём экземпляр класса открытия попапа с картинкой
const popupImage = new PopupWithImage(popupPhotoSelector);
popupImage.setEventListeners();

// объявляем хэндл для слушателя открытия попапа с картинкой
function handleCardClick() {
  const data = {
    link: this.src,
    name: this.alt
  };
  popupImage.open(data);;
};

// объявляем динамический хэндл для слушателя лайка
function handleLike() {
  let likes = this._likesNumber.textContent;
  let likesNumber = Number(likes);
  if (this._buttonLike.classList.contains('photo-grid__like_active')) {
    this._buttonLike.classList.remove('photo-grid__like_active');
    likes = (likesNumber -= 1);
    this._likesNumber.textContent = likes;
    api.deleteLike(this._idCard);
  } else {
    this._buttonLike.classList.add('photo-grid__like_active');
    likes = (likesNumber += 1);
    this._likesNumber.textContent = likes;
    api.setLike(this._idCard);
  }
};

// объявляем хэндл для слушателя удаления карточки
function handleDeleteClick() {
  const card = this._element;
  const idCard = this._idCard;
  popupConfirmation.open();

  function handleSubmitConfirmation() {
    card.remove();
    api.deleteItem(idCard);
    popupConfirmation.close();
  };

  popupConfirmation.setEventListeners(handleSubmitConfirmation);
};

// создаём новый класс валидации формы редактирования профиля и включаем ее
const profileFormValidator = new FormValidator(config, formProfile);
profileFormValidator.enableValidation();

// создаём новый класс валидации формы добавления новой карточки и включаем ее
const addCardFormValidator = new FormValidator(config, formAdd);
addCardFormValidator.enableValidation();

// создаём экземпляр попапа с формой редактирования профиля
const popupFormProfile = new PopupWithForm(popupProfileSelector, handleSubmitProfile);
popupFormProfile.setEventListeners();

// объявляем хэндл для класса с формой профиля
function handleSubmitProfile() {
  const buttonForm = this._popup.querySelector('.popup__button-submit');
  renderLoading(true, buttonForm, "Сохранить");
  const inputValues = this._getInputValues();
  userInfoDisplay.setUserInfo(inputValues);
  api.editProfile(inputValues)
  .finally(() => {
    renderLoading(false, buttonForm, "Сохранить");
  });
  popupFormProfile.close();
}

// создаём экземпляр попапа с формой добавления нового места
const popupFormAdd = new PopupWithForm(popupAddSelector, handleSubmitAdd);
popupFormAdd.setEventListeners();

// объявляем хэндл для класса с формой добавления нового места
function handleSubmitAdd(cardInfo) {
  const buttonForm = this._popup.querySelector('.popup__button-submit');
  renderLoading(true, buttonForm, "Создать");
  cardInfo.likes = [];
  api.getUserInfo()
  .then(res => {
    const cardCreated = cardCreate(cardInfo, res);
    cardsContainer.prepend(cardCreated);
  })
  api.createItem(cardInfo)
  .finally(() => {
    renderLoading(false, buttonForm, "Создать");
  });
  popupFormAdd.close();
}

// создаём класс с информацией о пользователе
const userInfoDisplay = new UserInfo({ profileNameSelector, profileAboutSelector });

// вешаем слушатель на кнопку изменения аватара
buttonOpenPopupAvatar.addEventListener('click', function () {
  popupFormAvatar.open();
  avatarFormValidator.resetError();
});

// создаём экземпляр попапа с формой изменения аватара
const popupFormAvatar = new PopupWithForm(popupAvatarSelector, handleSubmitAvatar);
popupFormAvatar.setEventListeners();

// объявляем хэндл для класса с формой изменения аватара
function handleSubmitAvatar() {
  const buttonForm = this._popup.querySelector('.popup__button-submit');
  renderLoading(true, buttonForm, "Сохранить");
  const inputValues = this._getInputValues();
  avatarImage.src = inputValues.avatar;
  api.updateAvatar(inputValues)
  .finally(() => {
    renderLoading(false, buttonForm, "Сохранить");
  });
  popupFormAvatar.close();
}

// создаём новый класс валидации формы изменения аватара и включаем ее
const avatarFormValidator = new FormValidator(config, formAvatar);
avatarFormValidator.enableValidation();

// создаём класс с попапом подтверждения
const popupConfirmation = new PopupWithConfirmation(popupConfirmationSelector);

// создаём экземпляр класса для работы с сервером
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'e4a26b2f-7ecf-4502-808a-71514b8a9269',
    'Content-Type': 'application/json'
  }
});

// вызываем метод класса Api и создаем исходные карточки с сервера в нём через класс отрисовки Section
api.getAllNeededData()
.then((data) => {
  const [ cardsInfo, userInfo ] = data;
  avatarImage.src = userInfo.avatar;

  const defaultCardList = new Section({
    renderer: (item) => {
      const card = new Card(item, userInfo, '#template-card', handleCardClick, handleLike, handleDeleteClick);
      const cardElement = card.generateCard();
      if (item.owner._id !== userInfo._id) {
        cardElement.querySelector('.photo-grid__delete').remove();
      };
      defaultCardList.addItem(cardElement);
    }
  }, cardsContainerSelector);

  defaultCardList.renderItems(cardsInfo);
  userInfoDisplay.setUserInfo(userInfo);
});

// объявляем функцию прелоудера (ожидания загрузки с сервера)
function renderLoading(isLoading, buttonForm, text) {
  if (isLoading) {
    buttonForm.textContent = "Сохранение...";
  } else {
    buttonForm.textContent = text;
  }
};
