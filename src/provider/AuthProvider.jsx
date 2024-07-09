import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const axiosPublic = useAxiosPublic()

    const register = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const updateUserProfile = (name, photo, currUser) => {
        return updateProfile(currUser, {
            displayName: name,
            photoURL: photo
        })
    }


    const provider = new GoogleAuthProvider()
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            setUser(currUser);
            if(currUser){
                // set token to the LS
                const userData = {email: currUser.email}
                axiosPublic.post('/jwt', userData)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // do something
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])



    const authInfo = {
        user,
        loading,
        register,
        login,
        googleSignin,
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