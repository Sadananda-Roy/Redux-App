import React from "react";
import SignIn from "./Components/SignIn.jsx";
import DictionaryHome from "./Components/DictionaryHome.jsx";

import {authDictionary} from "../Chat/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

const Dictionary = () => {
    const [user] = useAuthState(authDictionary); //user is null before sign in

    return (
        <>
            {user ? <DictionaryHome loggedInUser={user} /> : <SignIn />}
        </>
    );
}
export default Dictionary;