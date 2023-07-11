// созддаём класс, который отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  // принимаем в конструктор селектор имени пользователя и селектор информации о себе
  constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileAbout = document.querySelector(profileAboutSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  // публичный метод, который возвращает объект с данными пользователя
  getUserInfo() {
    const getInfo = {};
    getInfo.name = this._profileName.textContent;
    getInfo.about = this._profileAbout.textContent;
    return getInfo
  }

  // публичный метод, который принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(setInfo) {
    this._profileName.textContent = setInfo.name;
    this._profileAbout.textContent = setInfo.about;
  }

  // публичный метод, который обновляет аватар на странице
  setAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}
