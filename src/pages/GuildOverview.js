import React, {Fragment, useContext} from 'react';
// check of auth
import { AuthContext } from "../context/AuthContext";



function GuildOverview() {

    const {user}= useContext(AuthContext);
    console.log("GuildOverview?")
    console.log(user);


    return (
        <Fragment>
            <h2>Guilder Overview page</h2>
        </Fragment>
    );
}

export default GuildOverview;