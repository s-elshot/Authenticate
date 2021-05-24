import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContext";
import "./LogInButton.css"

function LogInButton() {


    const {changeState, signedIn} = useContext(UserContext)

    return (
        <>
            <button className="logInButton"
                type="submit"
                onClick={changeState}>
                {signedIn ? 'UITLOGGEN' : 'INLOGGEN'}
            </button>
        </>
    );
}


export default LogInButton;