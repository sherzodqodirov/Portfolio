import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


firebase.initializeApp({
    apiKey: "AIzaSyCQhgGRrE0up4dKcc7sPo0Ev1CWFeMBl7g",
    authDomain: "online-chat-1d6f5.firebaseapp.com",
    projectId: "online-chat-1d6f5",
    storageBucket: "online-chat-1d6f5.appspot.com",
    messagingSenderId: "248493957803",
    appId: "1:248493957803:web:57483655ae2888ac98cdee"
});
export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </Context.Provider>,
    </React.StrictMode>
);

reportWebVitals();
