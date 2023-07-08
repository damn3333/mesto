// созддаём класс карточки
export default class Card {
    // принимаем в конструктор ссылки на текст и картинки, селектор template-элемента и функцию открытия попапа с картинкой
    constructor(data, templateSelector, handleCardClick) {
      this._place = data.place;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._element = this._getTemplate();
      this._buttonLike = this._element.querySelector('.photo-grid__like');
      this._buttonDelete = this._element.querySelector('.photo-grid__delete');
      this._cardImage = this._element.querySelector('.photo-grid__image');
      this._cardText = this._element.querySelector('.photo-grid__text');
    }

    // достаём из template-элемента шаблон разметки
    _getTemplate() {
      const cardElement = document.querySelector(this._templateSelector).content
      .querySelector('.photo-grid__item').cloneNode(true);
      return cardElement;
    }

    // приватный метод удаления карточки
    _deleteCardElement() {
      this._element.remove();
      this._element = null;
    }

    // приватный метод смены лайка карточки
    _handleLike() {
      this._buttonLike.classList.toggle('photo-grid__like_active');
    }

    // устанавливаем слушатели событий на элементы карточки
    _setEventListeners() {
      this._buttonLike.addEventListener('click', () => {
        this._handleLike();
      });

      this._buttonDelete.addEventListener('click', () => {
        this._deleteCardElement();
      });

      this._cardImage.addEventListener('click', this._handleCardClick);
    }

    // публичный метод, который возвращает готовую разметку карточки с установленными слушателями
    generateCard() {
      this._setEventListeners();
      this._cardText.textContent = this._place;
      this._cardImage.src = this._link;
      this._cardImage.alt = this._place;
      return this._element;
    }
  }
