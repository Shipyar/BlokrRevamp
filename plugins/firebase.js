import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyBS94JdmG5CIm0bgAuzuPRKjipnx6Nmh-E",
    authDomain: "blokr-93a03.firebaseapp.com",
    databaseURL: "https://blokr-93a03.firebaseio.com",
    projectId: "blokr-93a03",
    storageBucket: "blokr-93a03.appspot.com",
    messagingSenderId: "636822275586"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth()