import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import "firebase/firestore"

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfjQk6nncEahB0WGAdLn6R1VfkdjUwyBE",
    authDomain: "generate-teams-137bd.firebaseapp.com",
    projectId: "generate-teams-137bd",
    storageBucket: "generate-teams-137bd.appspot.com",
    messagingSenderId: "227347828781",
    appId: "1:227347828781:web:89ad4273b30693ccffe8a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

