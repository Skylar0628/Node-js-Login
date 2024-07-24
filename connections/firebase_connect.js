var firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBKqz4E1hmR2l7HXTAoZqyLn0oN1ZoiPr8",
    authDomain: "artful-affinity-423716-j0.firebaseapp.com",
    databaseURL: "https://artful-affinity-423716-j0-default-rtdb.firebaseio.com",
    projectId: "artful-affinity-423716-j0",
    storageBucket: "artful-affinity-423716-j0.appspot.com",
    messagingSenderId: "882183960731",
    appId: "1:882183960731:web:03a07177f1bfc12894ae3e",
    measurementId: "G-VK6BT1HX5F"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); //初始化auth

module.exports = { firebase, auth };