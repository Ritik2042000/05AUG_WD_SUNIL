
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_NETFLIX_API_KEY;
const authDomain = import.meta.env.VITE_NETFLIX_API_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_NETFLIX_API_PROJECT_ID;
const messagingSenderId = import.meta.env.VITE_NETFLIX_API_MESG_ID
const appId = import.meta.env.VITE_NETFLIX_API_ID

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: "netflix-clone-97263.appspot.com",
    messagingSenderId: messagingSenderId,
    appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        })
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '))
        // alert(error)
    }
}

const logIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        // console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
        // alert(error)
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, logIn, signup, logout }