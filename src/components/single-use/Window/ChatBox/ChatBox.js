import GUN from "gun";
import { useEffect, useState, useReducer } from "react";
import "./ChatBox.css";

// initialize gun locally
const gun = GUN({
    peers: [
      'http://localhost:3000/gun'
    ]
  })
  
  // create the initial state to hold the messages
  const initialState = {
    messages: []
  }
  
  // Create a reducer that will update the messages array
  function reducer(state, message) {
    return {
      messages: [message, ...state.messages]
    }
  }

const ChatBox = () => {
    const [username, setUsername] = useState("guest");
    // the form state manages the form input for creating a new message
    const [formState, setForm] = useState({
        name: '', message: ''
    })

    const ayos = [0, 1, 2];

    // initialize the reducer & state for holding the messages array
    const [state, dispatch] = useReducer(reducer, initialState)

    // when the app loads, fetch the current messages and load them into the state
    // this also subscribes to new data as it changes and updates the local state
    useEffect(() => {
        setUsername(prompt("Enter your username"));
        const messages = gun.get('messages');
        console.log(messages);
        messages.map().on(m => {
            dispatch({
                name: m.name,
                message: m.message,
                ayo: m.ayo,
                createdAt: m.createdAt
            })
        })
    }, [])

    // set a new message in gun, update the local state to reset the form field
    const saveMessage = () => {
        if(formState.message.length > 0){
            const messages = gun.get('messages')
            messages.set({
                name: username,
                message: formState.message,
                createdAt: Date.now()
            })
            setForm({
                name: '', message: ''
            })
        }
    }

    const saveAyo = (num) => {
        const messages = gun.get('messages')
        messages.set({
            name: username,
            message: null,
            ayo: num,
            createdAt: Date.now()
        })
        setForm({
            name: '', message: ''
        })
    };

    // update the form state as the user types
    const onChange = (e) => {
        setForm({ ...formState, [e.target.name]: e.target.value  })
    }

    return (
        <div id="chat-box">
            <ul id="message-view">
                {
                    state.messages.map(message => (
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
                    ))
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
            </div>
            <div id="message-input">
                <input
                    onChange={onChange}
                    name="message"
                    placeholder="type here..."
                    value={formState.message}
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