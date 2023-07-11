// созддаём класс карточки
export default class Card {
  // принимаем в конструктор все данные, селектор template-элемента и колбеки
  constructor(data, userInfo, templateSelector, handleCardClick, handleLike, handleDeleteClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._idCard = data._id;
    this._idUser = userInfo._id;
    this._idCardOwner = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleDeleteClick = handleDeleteClick;
    this._handleDeleteClickBind = this._handleDeleteClick.bind(this);
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector('.photo-grid__like');
    this._likesNumber = this._element.querySelector('.photo-grid__likes-number');
    this._buttonDelete = this._element.querySelector('.photo-grid__delete');
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._cardText = this._element.querySelector('.photo-grid__text');
  }

  // достаём из template-элемента шаблон разметки
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.photo-grid__item').cloneNode(true);
    return cardElement
  }

  // приватный метод уставноки количества лайков для карточки с сервера
  setLikeNumber(likesArray) {
    this._likesNumber.textContent = likesArray.length;
  }

  // метод удаления карточки
  deleteCardElement() {
    this._element.remove();
    this._element = null;
  }

  // приватный метод смены лайка карточки
  _isLike() {
    for (let i = 0; i < this._likes.length; i += 1) {
      if (this._likes[i]._id === this._idUser) {
      this._buttonLike.classList.add('photo-grid__like_active');
    }
   }
  }

  // приватный метод определения владельца карточки
  _detectWhoIsCardOwner() {
  if (this._idCardOwner !== this._idUser) {
    this._element.querySelector('.photo-grid__delete').remove();
    };
  }

  // устанавливаем слушатели событий на элементы карточки
  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._handleLike();
    });

    if (this._element.querySelector('.photo-grid__delete') !== null) {
      this._buttonDelete.addEventListener('click', this._handleDeleteClickBind);
    };

    this._cardImage.addEventListener('click', this._handleCardClick);
  }

  // публичный метод, который возвращает готовую разметку карточки с установленными слушателями
  generateCard() {
    this._setEventListeners();
    this._cardText.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.setLikeNumber(this._likes);
    this._isLike();
    this._detectWhoIsCardOwner();
    return this._element;
  }
}
