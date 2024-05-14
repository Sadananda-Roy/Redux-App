import React,{ useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp, query, orderBy, onSnapshot, limit, doc, getDoc } from "firebase/firestore";
import { authChat, dbChat } from "./Firebase";
import { Button, FormControl, TextField } from "@mui/material";
import "./ChatApp.css";
import Message from "./Message/Message";

const ChatBox = () => {
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const chatboxRef = useRef(null);

    useEffect(() => {
        // getData2();
        const q = query(
            collection(dbChat, "messages"),
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

    const getData2 = async() => {
        const docRef = doc(dbChat, "messages", "0ckNrtTpA8Wp2mW5erqn");
        const docSnap = await getDoc(docRef);
        debugger
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        debugger
        } else {
        // docSnap.data() will be undefined in this case
        debugger
        console.log("No such document!");
        }
    }
    const signOut = () => {
        authChat.signOut();
    };
    const handleSendMessage = async(event) => {
        event.preventDefault();
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        const { uid, displayName, photoURL } = authChat.currentUser;
        await addDoc(collection(dbChat, "messages"), {
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