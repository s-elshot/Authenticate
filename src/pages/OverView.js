import React, {Fragment, useContext} from 'react';
import AuthContext from "../context/AuthContext";


function Overview() {

    const {authState} = useContext(AuthContext);
    console.log(authState)
    return (
        <Fragment>
            <h2>Overview page</h2>
        </Fragment>
    );
}

export default Overview;