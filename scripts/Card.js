// импортируем используемые переменные и функции
import { openPopup, popupPhoto, popupImage, popupCaption, buttonClosePopupPhoto, closePopup } from './index.js';

// созддаём класс карточки
export class Card {
    // принимаем в конструктор ссылки на текст и картинки, а также селектор template-элемента 
    constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
    }
  
    // достаём из template-элемента шаблон разметки
    _getTemplate() {
      const cardElement = document.querySelector(this._templateSelector).content
      .querySelector('.photo-grid__item').cloneNode(true);
      return cardElement;
    }
  
    // приватный метод удаления карточки
    _deleteCardElement() {
      this._element.closest('.photo-grid__item').remove();
    }
  
    // приватный метод смены лайка карточки
    _handleLike() {
      this._element.querySelector('.photo-grid__like').classList.toggle('photo-grid__like_active');
    }

    // устанавливаем слушатели событий на элементы карточки
    _setEventListeners() {
      this._element.querySelector('.photo-grid__like').addEventListener('click', () => {
        this._handleLike();
      });
  
      this._element.querySelector('.photo-grid__delete').addEventListener('click', () => {
        this._deleteCardElement();
      });
  
      this._element.querySelector('.photo-grid__image').addEventListener('click', () => {
        openPopup(popupPhoto);
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupCaption.textContent = this._name;
      });
  
      buttonClosePopupPhoto.addEventListener('click', () => closePopup(popupPhoto));
   
    }
  
    // публичный метод, который возвращает готовую разметку карточки с установленными слушателями
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
  
      this._element.querySelector('.photo-grid__text').textContent = this._name;
      this._element.querySelector('.photo-grid__image').src = this._link;
      this._element.querySelector('.photo-grid__image').alt = this._name;
  
  
      return this._element;
    }
  }
