import React from "react";
import SignIn from "./Components/SignIn.jsx";
import DictionaryHome from "./Components/DictionaryHome.jsx";

import {authDictionary} from "../Chat/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import ThemeToggler from "../../Assets/Common/Theme/ThemeToggler.jsx";

const Dictionary = () => {
    const [user] = useAuthState(authDictionary); //user is null before sign in

    return (
        <>
            <ThemeToggler />
            {user ? <DictionaryHome loggedInUser={user} /> : <SignIn />}
        </>
    );
}
export default Dictionary;