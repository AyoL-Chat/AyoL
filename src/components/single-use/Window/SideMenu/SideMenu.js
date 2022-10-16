import { useEffect } from "react";
import "./SideMenu.css";

const SideMenu = (props) => {
    const { user } = props;
    let activeUsers = [user];

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <div id="side-menu">
            <div id="people-here">
                <div id="label">
                    <span>People Here</span>
                </div>
                <ul id="box">
                    {
                        activeUsers.map(user => (
                            <li>1</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;