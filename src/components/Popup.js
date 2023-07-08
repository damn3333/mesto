// созддаём класс, который отвечает за открытие и закрытие попапа
export default class Popup {
// принимаем в конструктор селектор попапа
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

// публичный метод открытия попапов
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

// публичный метод закрытия попапов
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

// приватный метод закрытия попапов по нажатию ESC
  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close();
    };
  }

// публичный метод, который добавляет слушатели закрытия попапа
  setEventListeners() {
    const buttonClosePopup = this._popup.querySelector('.popup__button-close');
    buttonClosePopup.addEventListener('click', () => this.close());

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }
}
