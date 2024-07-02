import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const register = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const updateUserProfile = (name, photo, currUser) =>{
        return updateProfile(currUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currUser =>{
            setUser(currUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe();
        }
    },[])



    const authInfo = {
        user,
        loading,
        register,
        login,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;