// находим необходимые DOM-элементы и сохраняем их в переменные
const editProfileButton = document.querySelector('.profile__button-edit');
const addPlaceButton = document.querySelector('.profile__button-add');
const popupProfile = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_add');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupProfileClose = document.querySelector('.popup__button-close_profile');
const popupAddClose = document.querySelector('.popup__button-close_add');
const popupPhotoClose = document.querySelector('.popup__button-close_photo');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = document.querySelector('#profile-form');
const formAdd = document.querySelector('#add-form');
const nameInput = formProfile.querySelector('#name');
const jobInput = formProfile.querySelector('#job');
const placeInput = formAdd.querySelector('#place');
const linkInput = formAdd.querySelector('#link');

// исходный массив карточек по умолчанию
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

// используем template для создания карточек
const templateCard = document.querySelector('#template-card').content;
const cards = document.querySelector('.photo-grid__list');

// объявляем функцию создания и добавления исходных карточек на страницу
function initialCard(item) {
  const cardElement = templateCard.querySelector('.photo-grid__item').cloneNode(true);
  cardElement.querySelector('.photo-grid__text').textContent = item.name;
  cardElement.querySelector('.photo-grid__image').src = item.link;
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
  cards.append(cardElement);
};

// добавляем все карточки в DOM
initialCards.forEach(initialCard);

// объявляем функцию создания новых карточек
function createCard() {
  const cardElement = templateCard.querySelector('.photo-grid__item').cloneNode(true);
  const capture = cardElement.querySelector('.photo-grid__text').textContent = placeInput.value;
  const image = cardElement.querySelector('.photo-grid__image').src = linkInput.value;
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
    document.querySelector('.popup__image').src = image;
    document.querySelector('.popup__caption').textContent = capture;
  });
  cards.prepend(cardElement);
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
  createCard();
  evt.target.reset();
  closePopup(popupAdd);
});




