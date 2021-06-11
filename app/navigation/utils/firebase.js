import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyC2WBrxPMt3AJziZg4n8ZQY64ooiIQBdJE",
  authDomain: "librerias-83da1.firebaseapp.com",
  projectId: "librerias-83da1",
  storageBucket: "librerias-83da1.appspot.com",
  messagingSenderId: "725008739776",
  appId: "1:725008739776:web:e044ad6c98919dd2b82c25"
}

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);