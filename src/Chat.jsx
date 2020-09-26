import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen on </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                <span className="chat_name">Uttej</span>    
                    This is a message.
                    <span className="chat_timestamp">
                        {new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})}
                    </span>
                </p>
                <p className="chat_message chat_receiver">
                    <span className="chat_name">Uttej</span>    
                        This is a message.
                    <span className="chat_timestamp">
                        {new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})}
                    </span>
                </p>
                
            </div>
            <div className="chat_footer">
                <IconButton>
                     <AttachFile />
                </IconButton>
                <IconButton>
                     <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input placeholder="Send a message." type="text"/>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
