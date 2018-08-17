import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBS94JdmG5CIm0bgAuzuPRKjipnx6Nmh-E",
    authDomain: "blokr-93a03.firebaseapp.com",
    databaseURL: "https://blokr-93a03.firebaseio.com",
    projectId: "blokr-93a03",
    storageBucket: "blokr-93a03.appspot.com",
    messagingSenderId: "636822275586"
  })
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase