let moviesList = null;

const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `
  * {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.container {
  padding: 20px;
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
  `;

  document.head.append(headStyle);
}

const createMarkup = () => {
  const container = document.createElement('div');
  const movies = document.createElement('div');


  container.setAttribute('class', 'container');
  movies.setAttribute('class', 'movies');


  container.append(movies);
  document.body.append(container);

  moviesList = document.querySelector('.movies');
}

const addMoviesToList = (movie) => {
const item = document.createElement('div');
const img = document.createElement('img');


item.setAttribute('class', 'movie');
img.setAttribute('class', 'movie__image');
img.src = movie.Poster;
img.alt = `${movie.Title} ${movie.Year}`;

item.append(img);
moviesList.append(item);
}

const getData = (url) => fetch(url)
  .then(res => res.json())
  .then(data => data.Search);

const searchString = 'Superman';

getData(`http://omdbapi.com/?apikey=d8d86f03&s=${searchString}`)
  .then((movies) => movies.forEach(movie => addMoviesToList(movie)))
  .catch((err) => console.log(err));

  createMarkup();
  createStyle();

// xhr variant

// const getData = (url) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url);

//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status !== 200) {
//       reject(xhr.status);
//     }
//     const json = JSON.parse(xhr.response);
//     resolve(json.Search);
//   }

//   xhr.onerror = (err) => reject(err);
// });

  // const superman = getData(`http://omdbapi.com/?apikey=d8d86f03&s=Superman`);
  // const batman = getData(`http://omdbapi.com/?apikey=d8d86f03&s=Batman`);
  // const ironman = getData(`http://omdbapi.com/?apikey=d8d86f03&s=Iron man`);

  // 1 variant promiseAll

  // Promise.all([superman, batman, ironman])
  // .then((arr) => arr.forEach(movies => movies.forEach((movie) => console.log(movie))));

  // 2 variant promiseRace

  // Promise.race([superman, batman, ironman]).then(console.log);