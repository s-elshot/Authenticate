import React, {createContext, useState} from 'react'


export const UserContext = createContext({});


function UserContextProvider({children}) {

    const [signedIn, toggleSignedIn] = useState(false)


    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!

    // function signIn() {
    //     if (!signedIn) {
    //         return(
    //        <Redirect to={"/"}/>)
    //
    //     }
    // }

    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!

    function changeState() {
        toggleSignedIn(!signedIn)
    }

    const data = {
        currentLogIn: signedIn,
        signedIn: signedIn,
        // signIn:signIn,
        changeState: changeState,
        toggleSignedIn: toggleSignedIn,
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}


export default UserContextProvider;