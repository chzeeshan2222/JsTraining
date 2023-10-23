// function getUsers() {
//     return [
//       { username: 'john', email: 'john@test.com' },
//       { username: 'jane', email: 'jane@test.com' },
//     ];
//   }
  
//   function findUser(username) {
//     const users = getUsers(); 
//     const user = users.find((user) => user.username === username);
//     return user;
//   }
  
//   console.log(findUser('john'));
function getUsers() {
    let users = [];
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 1000);
    return users;
  }
  
  function findUser(username) {
    const users = getUsers(); // A
    const user = users.find((user) => user.username === username); // B
    return user;
  }
  
  console.log(findUser('john'));
  // callbacks
  function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  }
  
  function findUser(username, callback) {
    getUsers((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUser('john', console.log);
  // Promises
  let success = true;

  function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
          ]);
        } else {
          reject('Failed to the user list');
        }
      }, 1000);
    });
  }
  
  function onFulfilled(users) {
    console.log(users);
  }
  function onRejected(error) {
    console.log(error);
  }
  
  const promise = getUsers();
  promise.then(onFulfilled, onRejected);

  const value = 2

const promise1 = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)
  console.log(random)
  if (random === value) {
    resolve('you guessed correctly')
  } else {
    reject('wrong number')
  }
})

console.log(promise1)

promise1.then((data) => console.log(data)).catch((err) => console.log(err))

//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  console.log(addColor(1000, '.first', 'red'))
})

function addColor(time, selector, color) {
  const element = document.querySelector(selector)
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        // resolve(data)
      }, time)
    } else {
      reject(`There is no such element : "${selector}"`)
    }
  })
}