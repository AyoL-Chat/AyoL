import "./SideMenu.css";

const SideMenu = () => {
    let activeUsers = [];

    return (
        <div id="side-menu">
            <div id="people-here">
                <div id="label">
                    <span>People Here</span>
                </div>
                <ul id="box">
                    {
                        activeUsers.map(user => (
                            <li>{user.username}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;