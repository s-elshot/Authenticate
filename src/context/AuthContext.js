import React, {createContext, useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import  jwt_decode from 'jwt-decode'
import axios from "axios";
//  CONTEXT
// 1. context maken met createContext
// 2.context provider-component bouwen met daarin:
// - het echte AuthContext.Provider component
// - geef eem data object mee in de provider
// - state
// 3. Wikkelen de provider om <App> heen in index.js
// 4. Test context door een component aan te melden met useContext

// AUTHENTICATIE

// 1. Bedenk welke data je in de context beschikbaar moet stellen en
// maak raamwerk voor alle informatie die in de context moet komen
// (login/logout state)
// 2. state maken voor gebruikersdata en lege functies
// 3. Plaats de state en functies in een data object en geef die mee via de value={} prop
// 4. Inlogfunctie: Proces inloggen (JWT token in local storage zetten
// en gebruikersdata opslaan in de context) in de provider regelen
//5. logOutfunctie: jwt ui local storage halen en context leeghalen
//6. Implementeren dat bij refresh wordt gecheckt of er nog een jwt token is
// en zo ja, gebruikersdata ophalen.

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const history = useHistory();

    // state gebruikersdata
    const [authState, setAuthState]  = useState({
        user: null,
        status: 'pending',
    })

    useEffect(()=>{
        // is er een token?
        // is er geen user?
        // get data (zoals bij login)
        // if not, no user but status "done"
    },[])

    // check if there's a token present, and if it's present, but no user,
    // get userdata

    // inlogfunctie
    async function logIn(jwtToken) {
        // console.log(jwtToken)
        // we hebben hier de JWT token nodig en
        // daaruit de user-id te halen
        // JWT token in local storage zetten
        // Gebruikersdata ophalen
        // Die data gebruiken om context te vullen
        // Doorlinken naar de profielpagina
        const decoded= jwt_decode(jwtToken)
        // get jwt-token specific for userId
        const userId = decoded.sub
        // store jwt-token in local storage
        localStorage.setItem("jwtToken",jwtToken)


            try {

                const result = await  axios.get(`http://localhost:3000/600/users/${userId}`,{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
                console.log(result);

                setAuthState({
                    user: {
                        email: result.data.email,
                        username: result.data.username,
                        id: result.data.id
                    },
                    // item isn't loading anymore
                    status: 'done'
                });
                history.push('/guildOverview');

            } catch (e){
                console.error(e)
            }
        }

    //
    // }

    // uitlogfunctie
    function logOut(){
        console.log("logOut!")
    }

    // omdat authstate een object is en we nog steeds gebruik willen
    // maken van de automatische state-update, zullen we de authState "spreaden"
    const data = {
        ...authState,
        logIn: logIn,
        logOut: logOut,

    }
    return(
        <AuthContext.Provider value={data}>
            {authState.status === 'done'
                ? children
                : <p>Loading..</p>
            }
            {children}

        </AuthContext.Provider>
    )
}

export default AuthContextProvider