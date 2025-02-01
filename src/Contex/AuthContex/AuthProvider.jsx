import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import {auth} from '../../firebase/firebase.config'
import { GoogleAuthProvider } from 'firebase/auth';


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    };


    useEffect (() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    },[]);

    const value = {user,loading,createUser,signInUser,signOutUser,googleLogin}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;