import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import {useForm} from "react-hook-form";

import './SignUpForm.css';

function SignUpForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false);
    const history = useHistory();

    async function onSubmit(data) {
        try {
            const result = await axios.post("http://localhost:3000/register",
                {
                    email: data.email,
                    // let op wat je vereist: als je alle velden vereist,
                    // moeten deze ook worden aangesproken voor aanmaak objecten
                    username: data.username,
                    password: data.password,
                })
            console.log(result);
            toggleRegisterSucces(true)
            setTimeout(()=>{
                history.push('/logIn')
            },2000)


        } catch (e) {
            console.error(e)
        }


    };


    //1 import axios
    //2 installeer axios
    //3 async function
    //4 try catch
    //5 in try: post request maken naar endpoint http://localhost:3000/register
    // username:
    // password:
    // email:
    //6 axios post request krijgt url en het data object mee
    //7 succesmelding aan gebruiker


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <fieldset className="signUpForm">
                    <h2>SIGN UP</h2>

                    {/*component???*/}
                    <label htmlFor="emailAdress">
                        <input type="email"
                               className="signUpField"
                               name="email"
                               id="email"
                               placeholder="Email"
                               {...register('email', {
                                   required: {
                                       value: true,
                                       message: 'This field cant be empty',
                                   },
                                   pattern: {
                                       value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                       message: 'Please insert a valid email-adress',
                                   },
                               })}
                        />
                        {errors.email && (<span id="signUpError">{errors.email.message}</span>)}
                    </label>

                    <label htmlFor="username">
                        <input type="text"
                               className="signUpField"
                               name="username"
                               id="username"
                               placeholder="Username"
                               {...register('username', {
                                   required: {
                                       value: true,
                                       message: 'This field cant be empty',
                                   },
                                   minLength: {
                                       value: 2,
                                       message: 'At least 2 characters must be used to define the username',
                                   },
                                   maxLength: {
                                       value: 25,
                                       message: 'At most 25 characters can be used to define the username',
                                   },
                               })}
                        />
                        {errors.username && (<span id="signUpError">{errors.username.message}</span>)}
                    </label>

                    <label htmlFor="password">
                        <input type="password"
                               className="signUpField"
                               name="password"
                               id="password"
                               placeholder="Password"
                               {...register('password', {
                                   required: {
                                       value: true,
                                       message: 'This field cant be empty',
                                   },
                                   minLength: {
                                       value: 2,
                                       message: 'At least 2 characters must be used to define the password',
                                   },
                                   maxLength: {
                                       value: 25,
                                       message: 'At most 25 characters can be used to define the password',
                                   },
                               })}
                        />
                        {errors.password && (<span id="signUpError">{errors.password.message}</span>)}
                    </label>



                    <button
                        type="submit"
                        id="confirmButton"
                        name="submitButton"
                        disabled={pristine}> SIGN UP
                    </button>

                    {registerSucces === true &&
                    <p>UPLOAD SUCCEEDED, REDIRECTING TO INLOG PAGE</p>
                    }

                </fieldset>

            </form>

        </>
    )
}

export default SignUpForm