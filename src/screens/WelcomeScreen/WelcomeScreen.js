import "./WelcomeScreen.css";
import Button from "../../components/multi-use/Button/Button";


function login(){
    
}


const WelcomeScreen = () => {
    return (
        <div id="welcome-screen">
            <div id="splash">
                <img src="./logo-transparent.png" alt="logo"></img>
                <h3>Chat for the whack</h3>
                <Button onClick= {window.location.href = "/chat"} title="Chat" style={{
                    width: "100%",
                    marginTop: 50
                }}/>
            </div>
        </div>
    );
};

export default WelcomeScreen;