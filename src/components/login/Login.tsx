import ScribifyLogo from '../../assets/ScribifyFullTransparent.png'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Register() {
    
    return (    
        <div className="content">
            <div className="logoContainer"><img className='logo' src={ScribifyLogo} alt='scribifyLogo'></img></div>
            <div className="logContainer">
                <div className="reglogNavContainer">
                    <Link to='/register'>
                        <div className='navItemContainer '><p className='navText'>Register</p></div>
                    </Link>
                    <Link to='/'>
                        <div className='navItemContainer ItemActive'><p className='navText'>Login</p></div>
                    </Link>
                </div>
                <div className='LogDescription'><p className='LogDescriptionText'><em>Welcome Back!</em></p></div>
                <div className="formContainer">
                    <form>
                        <div className="inputContainers">
                            <div className='inputFieldReg'><input className='InputField' placeholder='Username'></input></div>
                            <div className='inputFieldReg'><input className='InputField' type='password' placeholder='Password'></input></div>
                        </div>
                        <div className="signupBtnContainer"><button className='signupBtn'>LOGIN</button></div>
                    </form>
                </div>
                <div className="toRegisterLink"><p className='noAccount'><em>Don't have an account? <Link to='/register'><b>Register</b></Link></em></p></div>
            </div>
        </div>
    );
}

export default Register;