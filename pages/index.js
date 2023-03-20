// находим кнопку редактирования профиля и помещаем ее в переменную
let profileEdit = document.querySelector('.profile__button-edit');

// находим окно попапа и помещаем его в переменную
let popup = document.querySelector('.popup');

// находим кнопку закрытия попапа и помещаем ее в переменную
let popupClose = document.querySelector('.popup__button-close');

// находим в документе данные профиля и присваиваем им переменные
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// находим в DOM форму и ее поля ввода, присваиваем им переменные
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');

// вешаем на кнопку редактирования профиля слушатель по клику и выполняем функцию добавления класса открытия попапа, а также присваиваем полям формы данные профиля
profileEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// вешаем на кнопку закрытия попапа слушатель по клику и выполняем функцию удаления класса открытого попапа
popupClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

// объявляем функцию, где присваиваем значениям полей профиля данные из формы и в конце закрываем окно попапа
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

// прикрепляем к форме слушатель отправки и вызываем функцию-обработчик, написанную выше
formElement.addEventListener('submit', handleFormSubmit);


