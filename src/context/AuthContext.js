import { useContext } from "react";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch(action.type){
        case "set_username":
            return {...state, username: action.payload}
        default:
            return state;
    }
};

const setUsername = (dispatch) => (username) => {
    dispatch({ type: "set_username", payload: username });
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        setUsername
    }, { username: null }
);

export const useChat = () => useContext(Context);

