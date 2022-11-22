import React, {createContext} from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Lesson3 from "../components/Lesson3/Lesson3";


firebase.initializeApp({
    apiKey: "AIzaSyCH1gQvL8F5pkDtkoMHtZZcJlm4AlHRjDs",
    authDomain: "chat-react-4442e.firebaseapp.com",
    projectId: "chat-react-4442e",
    storageBucket: "chat-react-4442e.appspot.com",
    messagingSenderId: "853863260020",
    appId: "1:853863260020:web:7835663f5e322c8a6f1621",
    measurementId: "G-J7VR6S1CP9"
});

export const AuthFirebaseContext = createContext(null);

const auth = firebase.auth()
const firestore = firebase.firestore()


const Lesson3Router = () => {

    return (
        <AuthFirebaseContext.Provider value={{
            firebase,auth,firestore
        }}>
            <Lesson3/>
        </AuthFirebaseContext.Provider>
    );
};

export default Lesson3Router;