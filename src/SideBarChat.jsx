import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SideBarChat.css";

function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
