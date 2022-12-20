import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup, deleteUser } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const removeUser = (auth, user) =>{
        setLoading(true);
        return deleteUser(auth, user);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => unSubscribe;
    }, [])

    const info = {
        createUser,
        signIn,
        updateUser,
        logOut,
        googleSignIn,
        loading,
        removeUser,
        user
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;