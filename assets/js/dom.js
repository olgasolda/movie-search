export let inputSearch = null;
export let moviesList = null;
export let triggerMode = false;

export const createElement = ({
  type,
  attrs,
  container = null,
  position = "append",
  evt = null,
  handler = null,
}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach((key) => {
    if (key !== "innerHTML") el.setAttribute(key, attrs[key]);
    else el.innerHTML = attrs[key];
  });

  if (container && position === "append") container.append(el);
  if (container && position === "prepend") container.prepend(el);

  if (evt && handler && typeof handler === "function") {
    el.addEventListener(evt, handler);
  }

  return el;
};

export const createMarkup = () => {
  const container = createElement({
    type: "div",
    attrs: { class: "container" },
    container: document.body,
    position: "prepend",
  });

  createElement({
    type: "h1",
    attrs: {
      innerHTML: "Movies LookUp",
    },
    container,
  });

  const searchBox = createElement({
    type: "div",
    attrs: { class: "search" },
    container,
  });

  const inputBox = createElement({
    type: "div",
    attrs: { class: "search__group search__group--input" },
    container: searchBox,
  });

  const checkbox = createElement({
    type: "div",
    attrs: { class: "search__group search__group--checkbox" },
    container: searchBox,
  });

  createElement({
    type: "label",
    attrs: {
      class: "search__label-input",
      for: "search",
      innerText: "Movie search",
    },
    container: inputBox,
  });

  inputSearch = createElement({
    type: "input",
    attrs: {
      class: "search__input",
      type: "search",
      id: "search",
      placeholder: "Searching for...",
    },
    container: inputBox,
  });

  createElement({
    type: "input",
    attrs: {
      class: "search__checkbox",
      id: "checkbox",
      type: "checkbox",
    },
    container: checkbox,
    evt: "click",
    handler: () => (triggerMode = !triggerMode),
  });

  createElement({
    type: "label",
    attrs: {
      class: "search__label-checkbox",
      for: "checkbox",
      innerHTML: "Add movie to existing list",
    },
    container: checkbox,
  });

  moviesList = createElement({
    type: "div",
    attrs: { class: "movies" },
    container,
  });

  createElement({
    type: "div",
    attrs: {
      class: "footer",
      innerHTML: "&copy; Butnari Dumitru ",
    },
    container,
  });
};

export const createStyle = () => {
  createElement({
    type: "style",
    attrs: {
      innerHTML: `
        * 
        box-sizing: border-box;
        }
        
        body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        }
        
        .container {
        border: 2px solid #0f0f0f;
        padding: 20px;
        max-width: 1280px;
        min-height: 90vh;
        margin: 0 auto;
        }
        
        .movies {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        }
        
        .movie {
        display: flex;
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
        
        .search__label-input  {
        display: block;
        margin-bottom: 10px;
        }
        
        .search__input {
        display: block;
        max-width: 350px;
        width: 100%;
        padding: 10px 15px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid lightcoral;
        }
        
        .search__label-checkbox {
        font-size: 14px;
        display: inline-block;
        transform: translate(5px, -1px);
        }
        
        .footer {
          padding: 10px;
          font-size: 1.2rem;
          text-align: center;
          color: #e91212;
          opacity: 0;
      }`,
    },
    container: document.head,
  });
};

export const clearMarkup = (el) => el && (el.innerHTML = "");

export const addMovieToList = (m) => {
  const item = createElement({
    type: "div",
    attrs: { class: "movie" },
    container: moviesList,
  });

  createElement({
    type: "img",
    attrs: {
      class: "movie__image",
      src: /^(http|https):\/\//i.test(m.Poster) ? m.Poster : "img/no-image.png",
      alt: m.Title,
      title: m.Title,
    },
    container: item,
  });
};
