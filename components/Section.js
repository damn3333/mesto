// созддаём класс, который отвечает за отрисовку элементов на странице
export default class Section {
  // принимаем в конструктор массив данных, которые нужно добавить на страницу и функцию-колбек, которая отвечает за создание и отрисовку данных на странице, а также селектор контейнера, в который нужно вставить элементы
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  // публичный метод, который отвечает за отрисовку всех элементов
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // публичный метод, который принимает DOM-элемент и добавляет его в контейнер
  addItem(itemHtml) {
    this._container.append(itemHtml);
  }
}
