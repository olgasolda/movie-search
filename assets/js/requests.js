// GET

// async function getData(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'content-type': 'application/json'
//     }
//   });

//   if (!response.ok) throw Error(response.status);

//   return response.json();
// }

//   getData('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => console.log(res))
//   .catch(err => console.log(err));

// POST 

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });

//   if (!response.ok) throw Error(response.status);

//   return response.json();
// }

//   postData('https://jsonplaceholder.typicode.com/posts',
//   {
//     title: 'Hello world title',
//     body:'body text',
//     userId: 123
//   })
//   .then((res) => console.log(res))
//   .catch(err => console.log(err));

  // PUT

  // async function putData(url, data) {
  //   const response = await fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });
  
  //   if (!response.ok) throw Error(response.status);
  
  //   return response.json();
  // }
  
  //   putData('https://jsonplaceholder.typicode.com/posts/1',
  //   {
  //     title: 'Hello world title',
  //     body:'body text',
  //     userId: 123,
  //     test: 'test'
  //   })
  //   .then((res) => console.log(res))
  //   .catch(err => console.log(err));

  // PATCH

  // async function patchData(url, data) {
  //   const response = await fetch(url, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });
  
  //   if (!response.ok) throw Error(response.status);
  
  //   return response.json();
  // }
  
  //   patchData('https://jsonplaceholder.typicode.com/posts/1',
  //   {
  //     title: 'Hello world title',
  //     body:'body text',
  //     userId: 123
  //   })
  //   .then((res) => console.log(res))
  //   .catch(err => console.log(err));

// DELETE
  
  // async function deleteData(url, data) {
  //   const response = await fetch(url, {
  //     method: 'DELETE'
  //   });
  
  //   if (!response.ok) throw Error(response.status);
  
  //   return true;
  // }
  
  // deleteData('https://jsonplaceholder.typicode.com/posts/1')
  //   .then((res) => console.log(res))
  //   .catch(err => console.log(err));