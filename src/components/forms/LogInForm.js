import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './LogInForm.css';
import axios from "axios";
import {useHistory} from "react-router-dom";
// import FormFieldComponent from "./FormFieldComponent";

function LogInForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false);
    const history = useHistory();

    async function onSubmit(data) {
        try {
            const result = await axios.post("http://localhost:3000/login",data)

            // place jwt in local storage
            localStorage.setItem("jwtToken",result.data.accessToken)
            console.log(result);
            console.log(result.data.accessToken);
            toggleRegisterSucces(true)
            // no time-out: redirect immediately to new page
            history.push('/profile');

        } catch (e) {
            console.error(e)
        }


    };


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
                                    message: 'At least 2 characters must be used to define the first name',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'At most 30 characters can be used to define the first name',
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
                                    message: 'At least 2 characters must be used to define the first name',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'At most 30 characters can be used to define the first name',
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