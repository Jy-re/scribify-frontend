import ScribifyLogo from '../../assets/ScribifyFullTransparent.png'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Register() {
    
    return (    
        <div className="content">
            <div className="logoContainer"><img className='logo' src={ScribifyLogo} alt='scribifyLogo'></img></div>
            <div className="registerContainer">
                <div className="reglogNavContainer">
                    <Link to='/register'>
                        <div className='navItemContainer ItemActive'><p className='navText '>Register</p></div>
                    </Link>
                    <Link to='/'>
                        <div className='navItemContainer'><p className='navText'>Login</p></div>
                    </Link>
                </div>
                <div className='RegDescription'><p className='RegDescriptionText'><em>Welcome! Please fill out the registration form</em></p></div>
                <div className="formContainer">
                    <form>
                        <div className="inputContainers">
                            <div className='inputFieldReg'><input className='InputField' placeholder='Username'></input></div>
                            <div className='inputFieldReg'><input className='InputField' placeholder='Email'></input></div>
                            <div className='inputFieldReg'><input className='InputField' type='password' placeholder='Password'></input></div>
                            <div className='inputFieldReg'><input className='InputField' type='password' placeholder='Confirm Password'></input></div>
                        </div>
                        <div className="signupBtnContainer"><button className='signupBtn'>SIGN UP</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;