import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._link = data.link;
    this._name = data.name;
  }

  open() {
    this._popup.querySelector('.popup__image').src = this._link;
    this._popup.querySelector('.popup__image').alt = this._name;
    this._popup.querySelector('.popup__caption').textContent = this._name;
    super.open();
  }
}
