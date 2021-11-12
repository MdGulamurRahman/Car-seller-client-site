import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,getIdToken, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import firebaseInit from '../Pages/Login/Firebase/firebase.init';

firebaseInit();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");
    //first register user
    const registerUser = (email, password, name, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            setUser(result.user);
            //update user profile
            const newUser = {email, displayName: name};
            setUser(newUser);
            //save user profile
            saveUser(email, name, 'POST');

            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
               
              }).catch((error) => {
                // An error occurred
                // ...
              });

            history.replace('/')
            setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    //login user
    const loginUser = (email, password, location, history)=>{
         setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
        // Signed in 
        setUser(result.user);
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    // Google with sign in
    const googleWithSignIn = (location, history)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
         // Signed in 
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    //user state changed
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(IdToken => setToken(IdToken));
                setError("");
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return ()=> unsubscribe;
    },[])
    //sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
          }).catch((error) => {
            setError(error.message);
          })
          .finally(()=> setIsLoading(false));
    }
    //save user
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then()
    }
    //make admin state
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])
    return {
        user,
        error,
        registerUser,
        loginUser,
        googleWithSignIn,
        logOut,
        isLoading,
        admin,
        token
    }
    
   
};

export default useFirebase;