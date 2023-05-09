export let moviesList = null;
export let inputSearch = null;
export let triggerMode = false;

const createElement = ({ type,
  attrs = {},
  container = null,
  position = 'append',
  event = null,
  handler = null }) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach((key) => {
    if (key === 'innerHTML') el.innerHTML = attrs[key];
    else el.setAttribute(key, attrs[key]);
  });

  if (container && position === 'append') container.append(el);
  if (container && position === 'prepend') container.prepend(el);
  if (event && handler && typeof handler === 'function') el.addEventListener(event, handler);

  return el;
};

export const createStyle = () => {
  createElement({
    type: 'style',
    attrs: {
      innerHTML: `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.container {
  width: min(100% - 40px, 1280px);
  margin-inline: auto;
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.movie {
  align-content: center;
  justify-content: center;
}

.movie__image {
  width: 100%;
  object-fit: cover;
}

.search {
  margin-bottom: 30px;
}

.search__label-input {
  display: block;
  margin-bottom: 7px;
}

.search__input {
  display: block;
  max-width: 400px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 7px;
  border: 1px solid lightsteelblue;
  margin-bottom: 10px;
}

.search__label-checkbox {
  font-size: 0.8rem;
}

.search__group--checkbox {
  display: flex;
  gap: 5px;
  align-items: center;
}
  `
    },
    container: document.head
  });

};

export const createMarkup = () => {
  const container = createElement({
    type: 'div',
    attrs: { class: 'container' },
    container: document.body,
    position: 'prepend'
  });

  createElement({
    type: 'h1',
    attrs: { innerHTML: 'Приложение для поиска фильмов' },
    container
  });

  const searchBox = createElement({
    type: 'div',
    attrs: { class: 'search' },
    container
  });

  const inputBox = createElement({
    type: 'div',
    attrs: { class: 'search__group search__group--input' },
    container: searchBox
  });

  const checkBox = createElement({
    type: 'div',
    attrs: { class: 'search__group search__group--checkbox' },
    container: searchBox
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label input',
      for: 'search',
      innerHTML: 'Текст для поиска'
    },
    container: inputBox
  });

  inputSearch = createElement({
    type: 'input',
    attrs: {
      class: 'search__input',
      id: 'search',
      type: 'search',
      placeholder: 'Начните ввод текста...'
    },
    container: inputBox
  });

  createElement({
    type: 'input',
    attrs: {
      class: 'search__checkbox',
      id: 'checkbox',
      type: 'checkbox',
    },
    container: checkBox,
    event: 'click',
    handler: () => triggerMode = !triggerMode
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label checkbox',
      for: 'checkbox',
      innerHTML: 'Добавлять фильмы к существующему списку'
    },
    container: checkBox
  });

  createElement({
    type: 'div',
    attrs: { class: 'movies' },
    container
  });


  moviesList = document.querySelector('.movies');
};

export const addMoviesToList = (m) => {
  const item = createElement({
    type: 'div',
    attrs: { class: 'movie' },
    position: 'prepend',
    container: moviesList
  });

  createElement({
    type: 'img',
    attrs: {
      class: 'movie__image',
      src: /^(http|https):\/\//i.test(m.Poster) ? m.Poster : 'assets/img/no-image.png',
      alt: `${m.Title} ${m.Year}`,
      title: `${m.Title} ${m.Year}`,
    },
    container: item
  });
};

export const clearMoviesMarkup = (el) => el && (el.innerHTML = '');