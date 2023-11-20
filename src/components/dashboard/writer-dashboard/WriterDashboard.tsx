import ProfileIcon from '../../../assets/Profile.png'

function WriterDashboard () {
    return (
        <div className="dashboard">
            <div className="dashboardContainer">
                <div className="headerContainer">
                    <div className="imgContainer"><img src={ProfileIcon} alt="ProfileIcon"></img></div>
                    <div className="welcomeMessageContainer"><p className='welcomeMessage'>Welcome, Writer!</p></div>
                </div>
                <hr></hr>
                <div>
                    <div className="contentContainer">
                        <div className="navContainer">
                            <div className="navItemWContainer"><p className='navItemLabel'>Works</p></div>
                            <div className="navItemWContainer"><p className='navItemLabel'>Browse Books</p></div>
                        </div>
                    </div>
                    <div className="worksContainer">
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default WriterDashboard;