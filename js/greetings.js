
// const logininput = document.querySelector('#login-form input');
// const loginForm = document.querySelector('#login-form');
// const greeting = document.querySelector('#greeting');
// //string
// const HIDDEN_CLASSNAME = 'hidden';
// const USERNAME_KEY = 'username';

// function onLoginSubmit(e) {
//   e.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   localStorage.setItem(USERNAME_KEY, logininput.value);
//   //greeting.innerText = `Hello ${username}`;
//   //greeting.classList.remove(HIDDEN_CLASSNAME);
//   paintGreetings();
// }

// function paintGreetings() {
//   const username = localStorage.getItem(USERNAME_KEY);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }


// const savedUserName = localStorage.getItem(USERNAME_KEY);
// //string은 오타나도 지적하지 않지만, 변수명이 오타나면 자바스크립트가 지적해줄 것이기 때문
// console.log(savedUserName);

// if(savedUserName === null) {
//   //show form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener('submit', onLoginSubmit);
// } else {
//   //show greeting
//   //greeting.classList.remove(HIDDEN_CLASSNAME);
//   //greeting.innerText = `Hello ${savedUserName}`;
//   paintGreetings()
// } 

const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  //greeting.innerText = `Hello ${username}`;
  //greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

//string은 오타나도 지적하지 않지만, 변수명이 오타나면 자바스크립트가 지적해줄 것이기 때문

if(savedUserName === null) {
  //show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show greeting
  //greeting.classList.remove(HIDDEN_CLASSNAME);
  //greeting.innerText = `Hello ${savedUserName}`;
  paintGreetings(savedUserName);
} 