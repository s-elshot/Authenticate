import React, {Fragment} from 'react';
import LogInButton from "../components/logIn/LoginButton";
import LogInForm from "../components/forms/LogInForm";


function LogIn() {


    return (
        <Fragment>
            <LogInForm/>
            <LogInButton/>
        </Fragment>
    );
}

export default LogIn;