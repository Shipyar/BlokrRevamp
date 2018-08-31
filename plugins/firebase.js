import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyBL54jJhSIJXz-Y2E9I68h5B1H2a5P2phg",
  authDomain: "blokr-93286.firebaseapp.com",
  databaseURL: "https://blokr-93286.firebaseio.com",
  projectId: "blokr-93286",
  storageBucket: "blokr-93286.appspot.com",
  messagingSenderId: "307634233866"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
export const auth = firebase.auth();
export const db = firebase.firestore();
