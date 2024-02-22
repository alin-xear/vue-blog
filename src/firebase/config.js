// import firebase from 'firebase/app'
// import 'firebase/firestore'


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh4OaDMI9LCcghGpmWaeBOh1xmlJ1PvkY",
  authDomain: "udemy--vue-firebase-sites.firebaseapp.com",
  projectId: "udemy--vue-firebase-sites",
  storageBucket: "udemy--vue-firebase-sites.appspot.com",
  messagingSenderId: "601060018290",
  appId: "1:601060018290:web:1953168bfca30a76c69aeb"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }