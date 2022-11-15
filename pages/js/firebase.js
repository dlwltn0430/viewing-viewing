import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { 
  getAuth,// authentication 설정
  signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider, //google login 기능
  signInWithEmailAndPassword,// email 로그인
  createUserWithEmailAndPassword, //email 회원가입
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

// const firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyCmUGR61HHZi7x4hCWhO1t7TMoaSIXL73k",
  authDomain: "auth-test-web-1-79eb6.firebaseapp.com",
  projectId: "auth-test-web-1-79eb6",
  storageBucket: "auth-test-web-1-79eb6.appspot.com",
  messagingSenderId: "170711600497",
  appId: "1:170711600497:web:76c72401652bbf57483ad0",
  measurementId: "G-HMXBXFZ54R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정 필수!!
const auth = getAuth();

//...

//Google 로그인
const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};