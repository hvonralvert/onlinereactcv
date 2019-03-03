import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCIVc2_jIg6sQ_nRUyO8PD6t3SqjpzGt7o",
    authDomain: "henriksreact.firebaseapp.com",
    databaseURL: "https://henriksreact.firebaseio.com",
    projectId: "henriksreact",
    storageBucket: "henriksreact.appspot.com",
    messagingSenderId: "167374730891"
 };
 firebase.initializeApp(config);

 var db=firebase;

export default db;

