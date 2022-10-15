import "./ChatBox.css";

const ChatBox = () => {
    return (
        <div id="chat-box">
            <div id="message-view"></div>
            <div id="emoji-bar"></div>
            <form id="message-input">
                <input type="text" placeholder="type here..."/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default ChatBox;