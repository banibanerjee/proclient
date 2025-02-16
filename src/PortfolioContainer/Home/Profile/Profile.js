import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService'


const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='#'>
                        <i className='fa fa-facebook-square' />
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'/>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'/>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'/>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'/>
                    </a>
                    </div>
                   
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Bani</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>

<Typical loop={Infinity}
steps={[
    "Bani Banerjee 🔴",
    1000,
    "Full Stack Developer 🖥️",
    1000,
    "Mern Stack Developer 💻",
    1000,
    "Node js Developer 😎",
    1000,
    
]}/>
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'
                    //implementing the call to action button 
onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
                    <a href="Bani Banerjee (CV).pdf" download="Bani Banerjee (CV).pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile