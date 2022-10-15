import "./Window.css";
import SideMenu from "./SideMenu/SideMenu";
import ChatBox from "./ChatBox/ChatBox";
import { useEffect, useState } from "react";

const Window = () => {
    // let password = '123456789';
    // const [username, setUsername] = useState('')

    return (
        <div id="window">
            <div id="taskbar">
                <div id="label">
                    <img src="./logo.png" alt="logo"></img>
                    <h3>AyoL Chat</h3>
                </div>
                <button id="close">X</button>
            </div>
            <div id="main">
                <ChatBox/>
                <SideMenu/>
            </div>
        </div>
    );
};

export default Window;