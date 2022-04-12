import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase.init";


//use this funnction for everyone
//step 1:google authntecation theke niye asbo 
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
const useFirebase=()=>{
    const [user,Setuser]=useState({});
   

    //signin function with google 
    const signinwithgoogle=()=>{
        console.log('sign in');
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    Setuser(user);
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }

    //
    useEffect(()=>{
         onAuthStateChanged(auth,user=>{
             Setuser(user);
             console.log(user)
         })
    },[]);
    

    //new function sign out

    const handlesignOut=()=>{
           signOut(auth).then( ()=>{

           })
    }

    return {user,signinwithgoogle,handlesignOut}
}
export default useFirebase;