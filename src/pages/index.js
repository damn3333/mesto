import './index.css';

// импортируем нужные переменные и классы из других модулей
import { buttonOpenPopupProfile, buttonOpenPopupAddPlace, profileNameSelector, profileAboutSelector, popupProfileSelector, formProfile, nameInput, aboutInput, popupAddSelector, formAdd, popupPhotoSelector, cardsContainer, cardsContainerSelector, config, popupAvatarSelector, formAvatar, buttonOpenPopupAvatar, popupConfirmationSelector, profileAvatarSelector } from '../utils/constants.js';
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
  if (this._buttonLike.classList.contains('photo-grid__like_active')) {
    api.deleteLike(this._idCard)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(res => {
      this._buttonLike.classList.remove('photo-grid__like_active');
      this.setLikeNumber(res.likes);
    })
    .catch(err => console.log(`Ошибка.....: ${err}`));
  } else {
    api.setLike(this._idCard)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(res => {
      this._buttonLike.classList.add('photo-grid__like_active');
      this.setLikeNumber(res.likes);
    })
    .catch(err => console.log(`Ошибка.....: ${err}`));
  }
};

// объявляем хэндл для слушателя удаления карточки
function handleDeleteClick() {
  const card = this._element;
  const idCard = this._idCard;
  popupConfirmation.open();

  function handleSubmitConfirmation() {
    api.deleteItem(idCard)
    .then(res => {
      if (res.ok) {
        // оставил тут прямой метод, потому что не могу связать this карточки и попапа (при вызове метода из Card возникает ошибка)
        card.remove();
        popupConfirmation.close();
      }
    })
    .catch(err => console.log(`Ошибка.....: ${err}`));
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
function handleSubmitProfile(inputValues) {
  const buttonForm = this._popup.querySelector('.popup__button-submit');
  renderLoading(true, buttonForm, "Сохранить");

  api.editProfile(inputValues)
  .then(profileInfo => {
    userInfoDisplay.setUserInfo(profileInfo);
    popupFormProfile.close();
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally(() => {
    renderLoading(false, buttonForm, "Сохранить");
  });
}

// создаём класс с информацией о пользователе
const userInfoDisplay = new UserInfo({ profileNameSelector, profileAboutSelector, profileAvatarSelector });

// вешаем слушатель на кнопку изменения аватара
buttonOpenPopupAvatar.addEventListener('click', function () {
  popupFormAvatar.open();
  avatarFormValidator.resetError();
});

// создаём экземпляр попапа с формой изменения аватара
const popupFormAvatar = new PopupWithForm(popupAvatarSelector, handleSubmitAvatar);
popupFormAvatar.setEventListeners();

// объявляем хэндл для класса с формой изменения аватара
function handleSubmitAvatar(inputValues) {
  const buttonForm = this._popup.querySelector('.popup__button-submit');
  renderLoading(true, buttonForm, "Сохранить");
  api.updateAvatar(inputValues)
  .then(profileInfo => {
    userInfoDisplay.setAvatar(profileInfo);
    popupFormAvatar.close();
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally(() => {
    renderLoading(false, buttonForm, "Сохранить");
  });
}

// создаём новый класс валидации формы изменения аватара и включаем ее
const avatarFormValidator = new FormValidator(config, formAvatar);
avatarFormValidator.enableValidation();

// создаём класс с попапом подтверждения
const popupConfirmation = new PopupWithConfirmation(popupConfirmationSelector);

// объявляем функцию прелоудера (ожидания загрузки с сервера)
function renderLoading(isLoading, buttonForm, text) {
  if (isLoading) {
    buttonForm.textContent = "Сохранение...";
  } else {
    buttonForm.textContent = text;
  }
};

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
  const [cardsInfo, userInfo] = data;
  userInfoDisplay.setAvatar(userInfo);

  const defaultCardList = new Section({
    renderer: (item) => {
      const cardCreated = cardCreate(item, userInfo);
      defaultCardList.addItem(cardCreated);
    }
  }, cardsContainerSelector);

  defaultCardList.renderItems(cardsInfo);
  userInfoDisplay.setUserInfo(userInfo);
  return data
})
.then(data => {

  // вешаем слушатель на кнопку добавления новой карточки
buttonOpenPopupAddPlace.addEventListener('click', () => {
  popupFormAdd.open();
  addCardFormValidator.resetError();
});
  // создаём экземпляр попапа с формой добавления нового места
const popupFormAdd = new PopupWithForm(popupAddSelector, handleSubmitAdd);
popupFormAdd.setEventListeners();

// объявляем хэндл для класса с формой добавления нового места
function handleSubmitAdd(inputValues) {
  const { 'new-name': name, ...rest } = inputValues;
  const newCardInfo = { name, ...rest };
  const userInfo = data[1];
  const buttonForm = this._popup.querySelector('.popup__button-submit');
  renderLoading(true, buttonForm, "Создать");

  api.createItem(newCardInfo)
    .then(data => {
      const cardCreated = cardCreate(data, userInfo);
      // использовать метод Section здесь не могу, т.к. он вне области видимости then
      cardsContainer.prepend(cardCreated);
      popupFormAdd.close();
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally(() => {
    renderLoading(false, buttonForm, "Создать");
  });
}
})
.catch(err => console.log(`Ошибка.....: ${err}`))
