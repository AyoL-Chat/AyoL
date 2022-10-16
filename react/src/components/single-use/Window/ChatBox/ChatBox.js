import { useEffect, useState } from "react";
import "./ChatBox.css";
import io from "socket.io-client";

const ChatBox = () => {
    const [message, setMessage] = useState("");

    const messages = [];
    const ayos = [0, 1, 2];

    const saveAyo = () => {};

    const onChange = () => {};

    const saveMessage = () => {
        if(message !== ""){
            socket.emit("chat message", username, window.location.pathname, message);
            setMessage("");
        }
        return false;
    };

    const playSound = (url) => {
        const ourAudio = document.createElement('audio'); // Create a audio element using the DOM
        ourAudio.style.display = "none"; // Hide the audio element
        ourAudio.src = url; // Set resource to our URL
        ourAudio.autoplay = true; // Automatically play sound
        ourAudio.onended = function() {
            this.remove(); // Remove when played.
        };
        document.body.appendChild(ourAudio);
    };

    useEffect(() => {
        const io = new Server({
            serveClient: false
        });
        let socket = io();
        let username;

        do{
            username = prompt('Enter your name');
        } while(username === '')
        if(username === null){
            username = 'guest';
        }

        socket.on('chat message', function(usr, lctn, msg){
            if(lctn === window.location.pathname){
                setMessages([...messages, { name: user, mesasge: msg }]);
            }
        });
    }, []);

    return (
        <div id="chat-box">
            <ul id="message-view">
                {
                    messages.map((message) => {
                        return (
                            <li key={message.createdAt}>
                                <span id="author">{message.name}</span>
                                <span> : </span>
                                {
                                    message.message !== null ? (
                                        <span id="text">{message.message}</span>
                                    ) : (
                                        <img src={`./ayos/${message.ayo}.png`} alt={`Ayo-${message.ayo}`}></img>
                                    )
                                }
                            </li>
                        );
                    })
                }
            </ul>
            <div id="emoji-bar">
                    {
                        ayos.map(a => (
                            <button key={a} onClick={() => saveAyo(a)}>
                                <img src={`./ayos/${a}.png`} alt={`Ayo-${a}`}></img>
                            </button>
                        ))
                    }
                    {
                        ayos.map(a => (
                            <audio controls id={`ayo-${a}`} style={{display: "none"}}>
                                <source src={`./ayos/${a}.mp3`} type="audio/mpeg"></source>
                            </audio>
                        ))
                    }
            </div>
            <div id="message-input">
                <input
                    onChange={onChange}
                    name="message"
                    placeholder="type here..."
                    value={message}
                />
                <button onClick={saveMessage}>Send</button>
            </div>
        </div>
    );
};

/*<div id="chat-box">
            <ul id="message-view">
                {
                    state.messages.map(message => (
                        <li>
                            <span id="author">{message.name}</span>
                            <span> : </span>
                            <span id="text">{message.message}</span>
                        </li>
                    ))
                }
            </ul>
            <div id="emoji-bar">
                    ayos.map(a => (
                        <button key={a}>
                            <img src={a} alt={a}></img>
                        </button>
                    ))
            </div>
            <form id="message-input" onSubmit={saveMessage}>
                <input type="text" placeholder="type here..." value={formState.message} onChange={onChange}/>
                <button onClick={saveMessage}>Send</button>
            </form>
        </div>*/

export default ChatBox;