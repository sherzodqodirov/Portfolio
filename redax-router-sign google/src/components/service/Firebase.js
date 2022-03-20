import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuYlTlAKA_8STu9M6eWf65I5f6oM3Ofg8",
  authDomain: "blog-app-f6511.firebaseapp.com",
  databaseURL: "https://blog-app-f6511-default-rtdb.firebaseio.com",
  projectId: "blog-app-f6511",
  storageBucket: "blog-app-f6511.appspot.com",
  messagingSenderId: "489107275138",
  appId: "1:489107275138:web:b097bfd0b95496e4bf239b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
