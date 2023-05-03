import {
  addMovieToList,
  clearMarkup,
  createMarkup,
  createStyle,
  inputSearch,
  moviesList,
  triggerMode,
} from "./dom.js";

let siteUrl = null;
let searchLast = null;

const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      if (!json || !json.Search) throw Error("Wrong object from server");

      return json.Search;
    });

const debounce = (() => {
  let timer = null;

  return (cb, ms) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(cb, ms);
  };
})();

const inputSearchHandler = (e) => {
  debounce(() => {
    const searchString = e.target.value.trim();

    if (
      searchString &&
      searchString.length > 3 &&
      searchString !== searchLast
    ) {
      if (!triggerMode) clearMarkup(moviesList);

      getData(`${siteUrl}?s=${searchString}&apikey=18b8609f`)
        .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
        .catch((err) => console.error(err));
    }
    searchLast = searchString;
  }, 2000);
};

export const appInit = () => {
  createStyle();
  createMarkup();

  siteUrl = "https://www.omdbapi.com/";
  inputSearch.addEventListener("keyup", inputSearchHandler);
};
