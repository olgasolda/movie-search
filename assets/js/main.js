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

const getData = (url) => fetch(url)
  .then(res => res.json())
  .then(data => data.Search);

const searchString = 'Superman';

getData(`http://omdbapi.com/?apikey=d8d86f03&s=${searchString}`)
  .then((movies) => movies.forEach(movie => console.log(movie)))
  .catch((err) => console.log(err));
