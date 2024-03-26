import React from "react";
import SignIn from "./SignIn.jsx";
import {auth} from "./Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./ChatBox.jsx";
const ChatApp = () => {
    const [user] = useAuthState(auth) //user is null before sign in
    return (
        <>
            {user ? <ChatBox /> : <SignIn />}
        </>
    )
}
export default ChatApp;