import React, { useEffect } from "react";
import "./Message.css";
import {authChat} from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar } from "@mui/material";

const Message = ({allMessages, chatboxRef, scrollToBottom}) => {
    const [user] = useAuthState(authChat);

    useEffect(() => {
        scrollToBottom();
    }, [scrollToBottom]);

    return (
        <div ref={chatboxRef} className="message_container">
            {allMessages.map(msg => {
                return (
                    <div className={`single_message ${msg.uid === user.uid ? "right" : "" }`}>
                        <div className="sender_name">
                            <Avatar className="sender_avatar" alt="User Avatar" src={msg.avatar} />{msg.name}
                        </div>
                        <div className="sender_text">{msg.text}</div>
                    </div>
                )
            })}
        </div>
    )
};

export default Message;
