import "./WelcomeScreen.css";
import Button from "../../components/multi-use/Button/Button";
//import { user } from "../../messaging/user";

const WelcomeScreen = () => {
    /*const username = "guest";
    const password = "123456789";

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
      }*/


    
    return (
        <div id="welcome-screen">
            <div id="splash">
                <img src="./logo-transparent.png" alt="logo"></img>
                <h3>Chat for the whack</h3>
                <Button title="Chat" style={{
                    width: "100%",
                    marginTop: 50
                }} onClick={() => {window.location.href = "/chat";}/*() => {signup(username, password)}*/}/>
            </div>
        </div>
    );
};

export default WelcomeScreen;