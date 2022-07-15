import React from 'react'
import { useState, useEffect } from "react";

function Form() {
    const initialValues = { username: "", email: "", password: "", PhoneNumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
       
    

        setIsSubmit(true);
    
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        if (!values.PhoneNumber) {
            errors.PhoneNumber = 'number is require';
        } else if (values.PhoneNumber.length < 10) {
            errors.PhoneNumber = 'must be 10 Number'
        }

        return errors;
    };
    return (
        <div className="container">

            <form onSubmit={handleSubmit} className='BOX'>
                <h1>Sign up</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.password}</p>
                    <div className="field">
                        <label>PhoneNumber</label>
                        <input
                            type="PhoneNumber"
                            name="PhoneNumber"
                            placeholder="phoneNumber"
                            value={formValues.PhoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.PhoneNumber}</p>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form