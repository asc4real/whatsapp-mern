import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SideBarChat from './SideBarChat';

function Sidebar() {
    return ( 
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1002%2F7150%2Fproducts%2FPOSTRERS-FRAMED-preview-POS-232_1000x1000.jpg%3Fv%3D1590572623&imgrefurl=https%3A%2F%2Ffullyfilmy.in%2Fcollections%2Fmani-ratnam-1%2Fbollywood&tbnid=HNjZMgl_jelAfM&vet=12ahUKEwjBgPG4zv7rAhVGE7cAHS0hACMQMygXegUIARCqAg..i&docid=t3iKjBU3QP9pPM&w=707&h=1000&q=fully%20filmy%20posters&ved=2ahUKEwjBgPG4zv7rAhVGE7cAHS0hACMQMygXegUIARCqAg"/>

                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or  Start a new chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
            </div>
        </div >
    );
}

export default Sidebar;