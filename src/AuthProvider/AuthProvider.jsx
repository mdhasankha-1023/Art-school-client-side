import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);

// provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // success alert
    const successAlert = (text) => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
          })
    }

    // error alert
    const errorAlert = (text) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${text}`,
          })
    }

    // onAuth state change
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // get jwt token
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data => {
                    localStorage.setItem('jwt_token', data.data.token)
                })
            }
            else{
                
                localStorage.removeItem('jwt_token')
            }
            

            return () => {
                unSubscribe();
            }
        })
    } , [])

    // sign-up and sign-in with google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //sign-up with email and password
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign-in with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update user profile
    const userProfileUpdate = (name, photoUrl) => {
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }


    

    const authInfo = {
        user,
        loading,
        successAlert,
        errorAlert,
        googleSignIn,
        signUp,
        signIn,
        logOut,
        userProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;