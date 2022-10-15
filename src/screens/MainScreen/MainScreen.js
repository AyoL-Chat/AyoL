import { useEffect, useState } from "react";
import GUN from "gun";
import "gun/sea";
import "gun/axe";
import "./MainScreen.css";
import Window from "../../components/single-use/Window/Window";


const MainScreen = () => {
    // Database
    const db = GUN();

    // Gun User
    const user = db.user().recall({sessionStorage: true});

    // Current User's username
    const [username, setUsername] = useState("guest");
    const password = "123456789";

    // Gun event handlers

    db.on('auth', async(event) => {
        const alias = await user.get('alias'); // username string
        setUsername(alias);

        console.log(`signed in as ${alias}`);
    });

    // Authentication functions

    const login = () => {
        user.auth(username, password, ({ err }) => err && alert(err));
    }
    
    const signup = () => {
        user.create(username, password, ({ err }) => {
          if (err) {
            alert(err);
          } else {
            login();
          }
        });
    }

    useEffect(() => {
        user.get('alias').on(v => setUsername(v));
        login();
    }, []);

    return (
        <div id="main-screen">
            <Window
                user={user}
            />
        </div>
    );
};

export default MainScreen;
