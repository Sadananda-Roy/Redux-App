import { auth } from "./Firebase";
import { Button } from "@mui/material";
import "./ChatApp.css";

const ChatBox = () => {
    const signOut = () => {
        auth.signOut();
    };
    return (
        <div className="chatbox_container">
            <h1>Signed In</h1>
            <Button color="warning" variant="contained" onClick={signOut}>Sign Out</Button>
        </div>
    )
}
export default ChatBox;