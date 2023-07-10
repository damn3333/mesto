// созддаём класс, который отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  // принимаем в конструктор селектор имени пользователя и селектор информации о себе
  constructor({ profileNameSelector, profileAboutSelector }) {
    this._profileNameSelector = document.querySelector(profileNameSelector);
    this._profileAboutSelector = document.querySelector(profileAboutSelector);
  }

  // публичный метод, который возвращает объект с данными пользователя
  getUserInfo() {
    const getInfo = {};
    getInfo.name = this._profileNameSelector.textContent;
    getInfo.about = this._profileAboutSelector.textContent;
    return getInfo
  }

  // публичный метод, который принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(setInfo) {
    this._profileNameSelector.textContent = setInfo.name;
    this._profileAboutSelector.textContent = setInfo.about;
  }
}
