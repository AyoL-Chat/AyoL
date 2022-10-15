import "./ChatBox.css";

const ChatBox = () => {
    const messages = [];
    const ayos = [
        "./ayos/0.png",
        "./ayos/1.png",
        "./ayos/2.png",
    ];

    const sendMessage = (event) => {
        event.preventDefault();
    };

    return (
        <div id="chat-box">
            <ul id="message-view">
                {
                    messages.map(message => (
                        <li>
                            <span id="author">{message.author}</span>
                            <span> : </span>
                            <span id="text">{message.text}</span>
                        </li>
                    ))
                }
            </ul>
            <div id="emoji-bar">
                {
                    ayos.map(a => (
                        <button key={a}>
                            <img src={a} alt={a}></img>
                        </button>
                    ))
                }
            </div>
            <form id="message-input" onSubmit={sendMessage}>
                <input type="text" placeholder="type here..."/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;