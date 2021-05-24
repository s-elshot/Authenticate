import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import './LogInForm.css';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

// import FormFieldComponent from "./FormFieldComponent";

function LogInForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false);

    const {logIn}= useContext(AuthContext);

    async function onSubmit(data) {
        try {
            const result = await axios.post("http://localhost:3000/login",data)

            logIn(result.data.accessToken)
            // place jwt in local storage
            // console.log(result);
            // console.log(result.data.accessToken);
            toggleRegisterSucces(true)
            // no time-out: redirect immediately to new page
            // place jwt in local storage

        } catch (e) {
            console.error(e)
        }


    }


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="logInForm">

                <fieldset className="formField">
                    <h2>LOG IN</h2>
                    <label htmlFor="formItems">
                        <input
                            type="text"
                            className="logInField"
                            name="email"
                            id="email"
                            placeholder="Email"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                }
                                , minLength: {
                                    value: 2,
                                    message: 'At least 2 characters must be used to define the email',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'At most 30 characters can be used to define the email',
                                }
                            })}
                        />
                        {errors.email && (<span id="signUpError">{errors.email.message}</span>)}
                    </label>


                    <label htmlFor="formItems">
                        <input
                            // className={}
                            type="password"
                            className="logInField"
                            name="password"
                            id="password"
                            placeholder="password"
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                }
                                , minLength: {
                                    value: 2,
                                    message: 'At least 2 characters must be used to define the password',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'At most 30 characters can be used to define the password',
                                }
                            })}
                        />
                        {errors.password && (<span id="signUpError">{errors.password.message}</span>)}
                    </label>


                    <button
                        type="submit"
                        className="logInField"
                        id="confirmButton"
                        name="submitButton"
                        disabled={pristine}> LOG IN

                    </button>

                    {registerSucces === true &&
                    <p>INLOG SUCCEEDED, REDIRECTING TO....</p>
                    }
                </fieldset>
            </form>


        </>
    )
}

export default LogInForm