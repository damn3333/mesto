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
const templateCard = document.querySelector('#template-card').content;
const cardsContainer = document.querySelector('.photo-grid__list');

//объявляем функцию создания карточки
function createCard(item) {
  const cardElement = templateCard.querySelector('.photo-grid__item').cloneNode(true);
  cardElement.querySelector('.photo-grid__text').textContent = item.name;
  cardElement.querySelector('.photo-grid__image').src = item.link;
  cardElement.querySelector('.photo-grid__image').alt = item.name;
  cardElement.querySelector('.photo-grid__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('photo-grid__like_active');
  });
  const deleteButton = cardElement.querySelector('.photo-grid__delete');
  deleteButton.addEventListener('click', function () {
    const deleteCardElement = deleteButton.closest('.photo-grid__item');
    deleteCardElement.remove();
  });
  cardElement.querySelector('.photo-grid__image').addEventListener('click', () => {
    openPopup(popupPhoto);
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupCaption.textContent = item.name;
  });
  return cardElement;
}

// объявляем функцию добавления карточки в конец
function addAppend(card) {
  cardsContainer.append(card);
}

// объявляем функцию добавления карточки в начало
function addPrepend(card) {
  cardsContainer.prepend(card);
}

// добавляем исходные карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
  addAppend(createCard(initialCards[i]));
}

// объявляем функцию открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// объявляем функцию закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

// объявляем функцию закрытия попапов по кнопке Esc
function closePopupEsc(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
}

// вешаем слушатели на кнопки закрытия попапов
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));

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
  addPrepend(createCard(cardInfo));
  evt.target.reset();
  submitButtonAdd.classList.add('popup__button-submit_disabled');
  closePopup(popupAdd);
});

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
