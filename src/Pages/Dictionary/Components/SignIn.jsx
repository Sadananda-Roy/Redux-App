import React from "react";
import { authDictionary } from "../../Chat/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material";
// import "./ChatApp.css";

const SignIn = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authDictionary, provider);
    };
    
    return (
        <div className="signin_container">
            <Button variant="contained" color="primary" onClick={googleSignIn}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn;

