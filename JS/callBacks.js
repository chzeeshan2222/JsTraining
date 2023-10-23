function makeUppercase(value) {
    console.log(value.toUpperCase())
  }
  // makeUppercase('peter')
  
  function reverseString(value) {
    console.log(value.split('').reverse().join(''))
  }
  
  function handleName(name, cb) {
    const fullName = `${name} smith`
    console.log(fullName)
    cb(fullName)
  }
  
   handleName('peter', makeUppercase)
   handleName('peter', reverseString)
  
//   const btn = document.querySelector('.btn')
  
  // btn.addEventListener('click', function () {
  //   console.log('hello world')
  // })
  
//   btn.addEventListener('click', sayHello)
  
//   function sayHello() {
//     console.log('hello people')
//   }
  
  // array methods, setTimeout etc


  //  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red'
    setTimeout(() => {
      second.style.color = 'blue'
      setTimeout(() => {
        third.style.color = 'green'
      }, 2000)
    }, 3000)
  }, 1000)
})