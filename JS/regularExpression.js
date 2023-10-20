// const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// console.log(myArray);
// //const re = /pattern/flags;
// const re = new RegExp("pattern", "flags");
////For example, re = /\w+\s/g creates a regular expression that looks for one or more characters followed by a space, and it looks for this combination throughout the string.
// const re = /\w+\s/g;
// const str = "fee fi fo fum";
//const myArray = str.match(re);
//console.log(myArray);

// ["fee ", "fi ", "fo "]
// const str = "fee fi fo fum";
// const re = /\w+\s/g;

// console.log(re.exec(str));
// console.log(re.exec(str));
// console.log(re.exec(str));
// console.log(re.exec(str));
const form = document.querySelector("#form");
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const re = /@/g;

function testInfo(phoneInput) {

  const ok = re.test(phoneInput);

  output.textContent = ok
    ? `@ is included in`
    : `not included`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(input.value);
});
