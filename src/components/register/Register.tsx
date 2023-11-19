import ScribifyLogo from '../../assets/ScribifyFullTransparent.png'


function Register() {
    return (
        <div className="content">
            <div className="logoContainer"><img className='logo' src={ScribifyLogo} alt='scribifyLogo'></img></div>
            <div className="registerContainer">
                <div className="reglogNavContainer">
                    <div className='navItemContainer'><p className='navText'>Register</p></div>
                    <div className='navItemContainer'><p className='navText'>Login</p></div>
                </div>
                <div className='RegDescription'><p className='RegDescriptionText'><em>Welcome! Please fill out the registration form</em></p></div>
            </div>
        </div>
    );
}

export default Register;