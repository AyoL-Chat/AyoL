import GUN from 'gun';
import SEA from 'gun/sea';
import 'gun/axe';
import { useEffect, useState } from "react";
import "./ChatBox.css";

const ChatBox = (props) => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);

    const ayos = [
        "./ayos/0.png",
        "./ayos/1.png",
        "./ayos/2.png",
    ];

    const { user } = props;

    const db = GUN();

    let scrollBottom;
    let lastScrollTop;
    let canAutoScroll = true;
    let unreadMessages = false;

    // Functions

    const autoScroll = () => {
        setTimeout(() => scrollBottom?.scrollIntoView({ behavior: 'auto' }), 50);
        unreadMessages = false;
    }

    const watchScroll = (e) => {
        canAutoScroll = (e.target.scrollTop || Infinity) > lastScrollTop;
        lastScrollTop = e.target.scrollTop;
    }

    const sendMessage = async (event) => {
        event.preventDefault();
        const secret = await SEA.encrypt(text, '#foo');
        const message = user.get('all').set({ what: secret });
        const index = new Date().toISOString();
        db.get('chat').get(index).put(message);
        setText("");
        canAutoScroll = true;
        autoScroll();
    }

    // On screen start

    useEffect(() => {
        var match = {
            // lexical queries are kind of like a limited RegEx or Glob.
            '.': {
              // property selector
              '>': new Date(+new Date() - 1 * 1000 * 60 * 60 * 3).toISOString(), // find any indexed property larger ~3 hours ago
            },
            '-': 1, // filter in reverse
        };

        // Get Messages
        db.get('chat')
        .map(match)
        .once(async (data, id) => {
            if (data) {
                // Key for end-to-end encryption
                const key = '#foo';

                var message = {
                    // transform the data
                    who: await db.user(data).get('alias'), // a user might lie who they are! So let the user system detect whose data it is.
                    what: (await SEA.decrypt(data.what, key)) + '', // force decrypt as text.
                    when: GUN.state.is(data, 'what'), // get the internal timestamp for the what property.
                };

                if (message.what) {
                    setMessages(
                        [...messages.slice(-100), message].sort((a, b) => a.when - b.when)
                    );
                    if (canAutoScroll) {
                        autoScroll();
                    }
                    else {
                        unreadMessages = true;
                    }
                }
            }
        });
    }, []);

    return (
        <div id="chat-box">
            <ul id="message-view">
                {
                    messages.map(message => (
                        <li>
                            <span id="author">{message.who}</span>
                            <span> : </span>
                            <span id="text">{message.what}</span>
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
                <input type="text" placeholder="type here..." value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;