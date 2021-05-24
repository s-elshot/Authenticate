import React from 'react';



function FormFieldComponent({fieldName,type, name, placeHolder,errorCheck,errorMessage,required}) {


    return (
        <>
                    <label htmlFor="formItems"> {fieldName}
                        <input
                            type={type}
                            name={name}
                            className="logInField"
                            id={name}
                            placeholder={placeHolder}
                            required={required}
                        />
                        {{errorCheck}&& (<span id="signUpError">{errorMessage}</span>)}
                    </label>
        </>
    )
}

export default FormFieldComponent