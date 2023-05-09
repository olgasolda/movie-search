import {
  createStyle,
  createMarkup,
  addMoviesToList,
  moviesList
} from './dom.js';

const getData = (url) => fetch(url)
  .then(res => res.json())
  .then(data => data.Search);

const searchString = 'Superman';

getData(`http://omdbapi.com/?apikey=d8d86f03&s=${searchString}`)
  .then((movies) => movies.forEach(movie => addMoviesToList(movie)))
  .catch((err) => console.log(err));

export const init = () => {
  createMarkup();
  createStyle();
}
