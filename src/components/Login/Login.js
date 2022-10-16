import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    //to store the data of user in backend if no error
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

    function handlelogin(e) {
        e.preventDefault();
        //calling signup api
        axios.post('https://realestate-backend-10x.herokuapp.com/login', user)
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
                    window.localStorage.setItem('email',user.email);
                    window.localStorage.setItem('token',response.data.token);
                    //navigate to dashboard/home page
                    navigate('/dashboard');


                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div className='login-page'>
                <div className='login-grid'>
                    <div className='login-heading'>
                        <h1>Logo</h1>
                    </div>
                    <div className='login-desc'>
                        <p>Enter your credentials to access your account</p>
                    </div>
                    <div >
                        <form onSubmit={handlelogin} className='login-form'>
                            <input type="email" name="email"  id="Email" placeholder="Email" className='email-field' autoComplete='off' onChange={e => handleInput(e)} required />
                            <input type="password" name="password"  id="password" placeholder="Password" className='password-field' autoComplete='off' onChange={e => handleInput(e)} minLength='8' required />
                            {/* <i class="bi bi-eye-slash" id="togglePassword"></i> */}
                            <div className='message-display'>
                                {errormessage !== "" ? <p className='error-msg'>{errormessage}</p> : <p></p>}
                                {successmessage !== "" ? <p className='success-msg'>{successmessage}</p> : <p></p>}
                            </div>
                            <button type="submit" className='login-button'>Sign In</button>
                        </form>
                        <Link style={{ textDecoration: 'none' }} to='/signup'><p className='signup-link'>Sign Up</p></Link>
                    </div>
                </div>
                <div className='signup-clue'>
                    <p >Don’t have an account?<span><Link to="/signup" className='signup-link'>Sign Up</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default Login;