import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageOfPopup = this._popup.querySelector('.popup__image');
    this._captionOfPopup = this._popup.querySelector('.popup__caption');
  }

  open(data) {
    this._link = data.link;
    this._place = data.place;
    this._imageOfPopup.src = this._link;
    this._imageOfPopup.alt = this._place;
    this._captionOfPopup.textContent = this._place;
    super.open();
  }
}
