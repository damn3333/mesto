import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    this.formValues = {};
    Array.from(this._popup.querySelectorAll('.popup__input')).forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._handleSubmit);
  }

  close() {
    this._getInputValues();
    this._popup.addEventListener('submit', (evt) => {
      evt.target.reset();
    });
    super.close();
  }
}
