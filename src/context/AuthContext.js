import React, {createContext, useState} from 'react'

//  CONTEXT
// 1. context maken met createContext
// 2.context provider-component bouwen met daarin:
// - het echte AuthContext.Provider component
// - geef eem data object mee in de provider
// - state
// 3. Wikkelen de provider om <App> heen in index.js
// 4. Test context door een component aan te melden met useContext

// AUTHENTICATIE

// 0. Bedenk welke data je in de context beschikbaar moet stellen en
// maak raamwerk voor alle informatie die in de context moet komen
// (login/logout state)
// 1. state maken voor gebruikersdata en lege functies
// 2. Inlogfunctie: Proces inloggen (JWT token in local storage zetten
// en gebruikersdata opslaan in de context) in de provider regelen
//3. Uitlogfunctie: jwt ui local storage halen en context leeghalen
//4. Implementeren dat bij refresh wordt gecheckt of er nog een jwt token is
// en zo ja, gebruikersdata ophalen.

export const AuthContext = createContext({});

function AuthContextProvider({children}) {


    // state gebruikersdata
    const [authState, setAuthState] = useState({
        user:null,
    })

    // inlogfunctie
    function logIn(){
        console.log("logIn!")
    }

    // uitlogfunctie
    function logOut(){
        console.log("logOut!")
    }

    // omdat authstate een object is en we nog steeds gebruik willen
    // maken van de automatische state-update, zullen we de authState "spreaden"
    const data = {
        ...authState,
        logIn: logOut,
        logOut: logOut,

    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider