import React, {Fragment} from 'react';
import SignUpCustomer from "./SignUpCustomer";
import SignUpGuilder from "./SignUpGuilder";
import SignUpForm from "../components/forms/SignUpForm";
import SignUpAdmin from "./SignUpAdmin";


function SignUp() {

    return (
        <Fragment>
            <SignUpCustomer/>
            <SignUpAdmin/>
            <SignUpGuilder/>
            <SignUpForm/>
        </Fragment>
    );
}

export default SignUp;