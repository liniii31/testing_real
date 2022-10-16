import React from 'react';
import './Signup.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


const Signup = () => {

    //to store the data of user in backend 
    let [user, setUser] = useState({
        email: "",
        password: "",
        confirm_password: ""
    });

    //to display what is the backend validation error , if any
    let [errormessage, setErrorMessage] = useState("");

    //to see success message
    let [successmessage, setSuccessMessage] = useState("");

    //to store the value of fields dynamically
    function handleInput(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //to register the user 
    function handleSignup(e) {
        e.preventDefault();
        if (user.confirm_password !== user.password) {
            setSuccessMessage("");
            setErrorMessage("Password and Confirm Password are not same !!");
        } else {
            //calling signup api
            axios.post('https://realestate-backend-10x.herokuapp.com/signup', user)
                .then(response => {
                    console.log(response.data.result, response.data.message);

                    //if the request failed
                    if (response.data.result === "failed") {
                        setSuccessMessage("");
                        setErrorMessage(response.data.message);
                    }

                    //if the request is successful
                    if (response.data.result === "success") {
                        setErrorMessage("");
                        setSuccessMessage(response.data.message);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <>
            <div className='signup-page'>
                <div className='signup-grid'>
                    <div className='signup-heading'>
                        <h1>Logo</h1>
                    </div>
                    <div className='signup-desc'>
                        <p>Create New Account</p>
                    </div>
                    <div >
                        <form onSubmit={handleSignup} className='signup-form'>
                            <input type="email" autoComplete='off' name="email" id="Email" placeholder="Email" className='email-field' onChange={e => handleInput(e)} required />
                            <input type="password" autoComplete='off' name="password" id="password" placeholder="Password" className='password-field' onChange={e => handleInput(e)} minLength="8" required />
                            {/* <i class="bi bi-eye-slash" id="togglePassword"></i> */}
                            <input type="password" autoComplete='off' name="confirm_password" id="confirm_password" placeholder="Confirm Password" className='password-field' onChange={e => handleInput(e)} minLength="8" required />
                            <div className='message-display'>
                                {errormessage !== "" ? <p className='error-msg'>{errormessage}</p> : <p></p>}
                                {successmessage !== "" ? <p className='success-msg'>{successmessage}</p> : <p></p>}
                            </div>
                            <button type="submit" className='signup-button'>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className='login-clue'>
                    <Link to="/" className='login-link'>Sign In</Link>
                </div>


            </div>
        </>
    )
}
export default Signup;