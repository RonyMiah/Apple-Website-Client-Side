import { useEffect } from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut ,signInWithEmailAndPassword ,onAuthStateChanged,GoogleAuthProvider ,signInWithPopup,updateProfile } from "firebase/auth";
import firebaseinitialize from "../Component/Firebase/FIrebaseinitialize";

// initialize firebase

firebaseinitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] =useState('')
    
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password,name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName:name };
        setUser(newUser);

        //save user from database
      console.log(email,name);
        saveUser(email, name);

        // send name To Firebase .. (Firebase Manage user thaika nise)

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        setAuthError('')
      })
    navigate('/')
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));
      ;
  };


  const loginUser = (email, password,location,navigate) => { 
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const distination = location.state?.from || '/';
    navigate(distination);
    setAuthError('')
    
  })
  .catch((error) => {
    setAuthError(error.message)
  })
    .finally( ()=> setIsLoading(false))
      ;
  }

  const googleLogIn = (location,navigate) => {
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    // // ...
    const destination = location.state?.from || '/';
    navigate(destination);
    setAuthError('')
  }).catch((error) => {
    setAuthError(error.message)
  });
  }


    useEffect(() => { 
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
          }
          setIsLoading(false);
        });
        return () => unSubscribe;
    }, [])
    
    
  const logOut = () => {
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( ()=> setIsLoading(false))
          ;
  }
  const saveUser = (email, displayName) => { 
    const user = { email, displayName }
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
  }

  


  return {
      user,
    registerUser,
    loginUser,
    authError,
    isLoading,
    googleLogIn,
      logOut,


  };
};

export default useFirebase;
