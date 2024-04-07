import React,{ useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp, query, orderBy, onSnapshot, limit } from "firebase/firestore";
import { auth, db } from "./Firebase";
import { Button, FormControl, TextField } from "@mui/material";
import "./ChatApp.css";
import Message from "./Message/Message";

const ChatBox = () => {
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const chatboxRef = useRef(null);

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
          );
      
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
              fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
              (a, b) => a.createdAt - b.createdAt
            );
            setAllMessages(sortedMessages);
            scrollToBottom();
        });
        return () => unsubscribe;
    }, []);

    const signOut = () => {
        auth.signOut();
    };
    const handleSendMessage = async(event) => {
        event.preventDefault();
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage("");
        scrollToBottom();
    };
    const scrollToBottom = () => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTo({
              top: chatboxRef.current.scrollHeight,
              behavior: 'smooth', // Use smooth scrolling behavior
            });
        }
    };

    return (
        <div className="chatbox_container">
            <Message allMessages={allMessages} chatboxRef={chatboxRef} scrollToBottom={scrollToBottom} />
            <div className="send_msg_container">
                <form onSubmit={handleSendMessage}>
                    <FormControl>
                        <TextField id="outlined-basic" label="Send Message" variant="outlined" value={message} onChange={(e) => setMessage(e.target.value)} style={{marginBottom: "1em", width: "100%"}} />
                    </FormControl>
                </form>
            </div>
            <Button color="warning" variant="contained" onClick={signOut}>Sign Out</Button>
        </div>
    )
}
export default ChatBox;