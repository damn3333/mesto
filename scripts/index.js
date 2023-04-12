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

// элементы popupAdd:
const popupAdd = document.querySelector('.popup_type_add');
const popupAddClose = document.querySelector('.popup__button-close_add');
const formAdd = document.querySelector('#add-form');
const placeInput = formAdd.querySelector('#place');
const linkInput = formAdd.querySelector('#link');

// элементы popupPhoto:
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoClose = document.querySelector('.popup__button-close_photo');

// другие элементы:
const templateCard = document.querySelector('#template-card').content;
const cards = document.querySelector('.photo-grid__list');

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
    document.querySelector('.popup__image').src = item.link;
    document.querySelector('.popup__caption').textContent = item.name;
  });
  return cardElement;
};

// объявляем функцию добавления карточки в конец
function addAppend(card) {
  cards.append(card);
};

// объявляем функцию добавления карточки в начало
function addPrepend(card) {
  cards.prepend(card);
};

// добавляем исходные карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
  addAppend(createCard(initialCards[i]));
};

// объявляем функцию открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// объявляем функцию закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

// вешаем слушатели на кнопки закрытия попапов
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));

// вешаем слушатель на кнопку редактирования профиля
editProfileButton.addEventListener('click', function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// вешаем слушатель на кнопку добавления новой карточки
addPlaceButton.addEventListener('click', () => openPopup(popupAdd));

// вешаем слушатель на отправку формы редактирования профиля
formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
});

// вешаем слушатель на отправку формы добавления новой карточки
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardInfo = { name: placeInput.value, link: linkInput.value };
  addPrepend(createCard(cardInfo));
  evt.target.reset();
  closePopup(popupAdd);
});
