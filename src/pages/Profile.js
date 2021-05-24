import React, {Fragment, useContext} from 'react';
// check of auth
import { AuthContext } from "../context/AuthContext";



function Profile() {

    const {user}= useContext(AuthContext);
    // console.log("Profile?")
    // console.log(user);


    return (
        <Fragment>
            <h2>Profile</h2>
            <p><strong>Username:</strong> {user && user.username}</p>
            <p><strong>Email:</strong> {user && user.email}</p>
        </Fragment>
    );
}

export default Profile;