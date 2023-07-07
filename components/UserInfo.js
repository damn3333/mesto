import { nameInput, jobInput } from '../utils/constants.js';

// созддаём класс, который отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  // принимаем в конструктор селектор имени пользователя и селектор информации о себе
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileNameSelector = document.querySelector(profileNameSelector);
    this._profileJobSelector = document.querySelector(profileJobSelector);
  }

  // публичный метод, который возвращает объект с данными пользователя
  getUserInfo() {
    const getInfo = {};
    getInfo.name = this._profileNameSelector.textContent;
    getInfo.job = this._profileJobSelector.textContent;
    return getInfo
  }

  // публичный метод, который принимает новые данные пользователя и добавляет их на страницу
  setUserInfo() {
    const setInfo = {
      name: nameInput.value,
      job: jobInput.value
    };
    this._profileNameSelector.textContent = setInfo.name;
    this._profileJobSelector.textContent = setInfo.job;
  }
}
