import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonSubmitDelete = this._popup.querySelector('.popup__button-confirmation');
  }

  setEventListeners(handleSubmit) {
    this._handleSubmit = handleSubmit;
    this._buttonSubmitDelete.addEventListener('click', () => {
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}
