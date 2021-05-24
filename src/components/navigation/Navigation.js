import React, {useContext} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import './Navigation.css'
import {UserContext} from "../../context/UserContext";
import LogInButton from "../logIn/LoginButton";

function Navigation() {

    const {signedIn} = useContext(UserContext)

    return (
        <nav>
            <div className="navContainter">
                <h1>NAVIGATION</h1>
                <ul className="navUl">

                    <li className="navBarUl">
                        <NavLink to ="/" activeClassName="active-link">HOME PAGE</NavLink>
                    </li>

                    {signedIn === false &&
                    <>
                        <li className="navBarUl">
                            <NavLink to ="/logIn" activeClassName="active-link">LOG IN</NavLink>
                        </li>
                        <li className="navBarUl">
                            <NavLink to="/signUp" activeClassName="active-link">SIGN UP</NavLink>
                        </li>
                    </>
                    }


                    {signedIn === true
                        ? <>
                            <li className="navBarUl">
                                <NavLink to="/profile" activeClassName="active-link">PROFILE PAGE</NavLink>
                            </li>
                            <li className="navBarUl">
                                <NavLink to="/guilderShop" activeClassName="active-link">GUILDERS PRIVATE SHOP</NavLink>
                            </li>
                            <li className="navBarUl">
                                <NavLink to="/shoppingCart" activeClassName="active-link">SHOPPING CART</NavLink>
                            </li>
                            <li className="navBarUl">
                                <NavLink to="/loginButton" activeClassName="active-link"><LogInButton/></NavLink>
                            </li>
                        </>
                        : <Redirect to={"/"}/>
                    }

                </ul>
            </div>

        </nav>
    );
}

export default Navigation;