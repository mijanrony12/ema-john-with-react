import { useEffect, useState } from "react"
import { signOut,getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged } from "firebase/auth";
import initialAuthentication from "../firebase/firebase.init";

initialAuthentication()
const useFirebase = () => {
    const [ user, setUser ] = useState({})
    const [ error, setError ] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                // setUser(result.user)
            })

    }

    const logOut = () => {
        signOut(auth).then(() => {
                setUser({})
          })
    }
          
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                 if (user) {
                        setUser(user)
                    } 
            })
               
        }, [])
    
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;