import './App.css';
import {
    Route,
    Switch,
} from 'react-router-dom';
import React from "react";
import Entrance from "./pages/Entrance";
import GuilderShop from "./pages/GuilderShop";
import Overview from "./pages/OverView";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Navigation from "./components/navigation/Navigation";
import GuildOverview from "./pages/GuildOverview";
import SignUpCustomer from "./pages/SignUpCustomer";
import SignUpGuilder from "./pages/SignUpGuilder";
import UserContextProvider from "./context/UserContext";


function App() {

    const data = {}


    return (

            <UserContextProvider value={data}>
                <nav>
                    <Navigation/>
                </nav>

                <Switch>

                    {/* basic functionality path*/}
                    <Route exact path={"/"}>
                        <Entrance/>

                    </Route>

                    <Route path={"/overview"}>
                        <Overview/>
                    </Route>

                    <Route exact path={"/logIn"}>
                        <Login/>
                    </Route>

                    {/* Shopping pages*/}
                    <Route exact path={"/guilderShop"}>
                        <GuilderShop/>
                    </Route>

                    <Route path={"/guildOverview"}>
                        <GuildOverview/>
                    </Route>

                    <Route exact path={"/shoppingCart"}>
                        <ShoppingCart/>
                    </Route>

                    {/* Sign-up items*/}
                    <Route exact path={"/signUp"}>
                        <SignUp/>
                    </Route>

                    <Route exact path={"/signUpCustomer"}>
                        <SignUpCustomer/>
                    </Route>

                    <Route exact path={"/signUpGuilder"}>
                        <SignUpGuilder/>
                    </Route>

                    <Route path={"/shoppingCart"}>
                        <ShoppingCart/>
                    </Route>

                </Switch>
            </UserContextProvider>


    )
}

export default App;
