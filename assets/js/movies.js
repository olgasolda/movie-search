import {
  createStyle,
  createMarkup,
  addMoviesToList,
  clearMoviesMarkup,
  inputSearch,
  moviesList,
  triggerMode
} from './dom.js';

let searchLast = null;

const debounceTime = (() => {
  let timer = null;
  return (cb, ms) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(cb, ms)
  };
})();

const getData = (url) => fetch(url)
  .then(res => res.json())
  .then(data => data.Search);

const inputSearchHandler = (e) => {
  debounceTime(() => {
    const searchString = e.target.value.trim();
    if (searchString && searchString.length > 3 && searchString !== searchLast) {
      if (!triggerMode) clearMoviesMarkup(moviesList);

      getData(`https://omdbapi.com/?apikey=d8d86f03&s=${searchString}`)
        .then((movies) => movies.forEach(movie => addMoviesToList(movie)))
        .catch((err) => console.log(err));
    }
    searchLast = searchString;
  }, 1000);
};

export const init = () => {
  createMarkup();
  createStyle();

  inputSearch.addEventListener('input', inputSearchHandler);
}
