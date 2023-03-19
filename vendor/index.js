// выбираем кнопку редактирования профиля и помещаем ее в переменную
let profileEdit = document.querySelector('.profile__button-edit');

// выбираем окно попапа и помещаем его в переменную
let popup = document.querySelector('.popup');

// вешаем на кнопку редактирования профиля слушатель по клику и выполняем функцию добавления класса открытия попапа
profileEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

// выбираем кнопку закрытия попапа и помещаем ее в переменную
let popupClose = document.querySelector('.popup__button-close');

// вешаем на кнопку закрытия попапа слушатель по клику и выполняем функцию удаления класса открытого попапа
popupClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

// находим в документе введенные ранее данные пользователя и присваиваем им переменные
let profileName = document.querySelector('.profile-info__name');
let profileJob = document.querySelector('.profile-info__job');

// находим в DOM форму и ее поля ввода
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');

// присваиваем полям формы значения из текстового содержимого профиля на странице
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

// объявляем функцию, где присваиваем значениям полей профиля данные из формы и в конце закрываем окно попапа
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

// прикрепляем к форме слушатель отправки и вызываем функцию-обработчик, написанную выше
formElement.addEventListener('submit', handleFormSubmit);


