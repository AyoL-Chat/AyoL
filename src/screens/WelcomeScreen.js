import "./WelcomeScreen.css";
import Button from "../components/multi-use/Button/Button";

const WelcomeScreen = () => {
    return (
        <div id="welcome-screen">
            <div id="splash">
                <img src="./logo-transparent.png" alt="logo"></img>
                <h3>Chat for the whack</h3>
                <Button title="Chat" style={{
                    width: "100%",
                    marginTop: 50
                }}/>
            </div>
        </div>
    );
};

export default WelcomeScreen;