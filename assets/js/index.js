import { init } from "./movies.js";

init();
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