import { loginGoogle } from './firebase.js';
const google = document.getElementById('btn__glogin');

let isLogin = false

//Google 로그인
google.addEventListener('click', (e) => {
  loginGoogle().then((result) => {
    console.log(result);
    const user = result.user;
    loginSuccess(user.email, user.displayName);
  });
});

//로그인 성공시 UI 변경
const loginSuccess = (email, id) => {
  isLogin = true;
  localStorage.setItem('email', email);
  localStorage.setItem('id', id);
  window.location.href = 'index.html';
};