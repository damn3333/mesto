export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

// 1. Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Что-то пошло не так!');
    })
    .catch((err) => {
      console.log(err);
    });
  }

// 2. Загрузка карточек с сервера
  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Что-то пошло не так!')
    })
    .catch((err) => {
      console.log(err);
    });
  }

// 3. Редактирование профиля
  editProfile(item) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
      name: item.name,
      about: item.about
    }),
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Что-то пошло не так!')
    })
    .catch((err) => {
      console.log(err);
    });
  }

// 4. Добавление новой карточки
  createItem(item) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
      name: item.name,
      link: item.link
    }),
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Что-то пошло не так!')
    })
    .catch((err) => {
      console.log(err);
    });
  }

// 5. Удаление карточки
  deleteItem(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Что-то пошло не так!')
    })
    .catch((err) => {
      console.log(err);
    });
  }

// 6. Установка лайка
  setLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Что-то пошло не так!')
    })
    .catch((err) => {
      console.log(err);
    });
  }

// 7. Удаление лайка
  deleteLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Что-то пошло не так!')
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // 8. Обновление аватара пользователя
  updateAvatar(id) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
      avatar: id.avatar,
    }),
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Что-то пошло не так!')
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // 9. Загрузка всей необходимой информации
  getAllNeededData() {
    return Promise.all([this.getCards(), this.getUserInfo()])
  }
}
