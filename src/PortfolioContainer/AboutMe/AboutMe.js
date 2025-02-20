import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHanding/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';
import './AboutMe.css';

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen)=>{
    if(screen.fadeInScreen !== props.id)
      return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description: "Full stack web and mobile developer with background knowledge of MERN stacks with redux along with a knack of building applications with atmost efficiency. Strong professional with a BSC willing to be an asset for an organization",
    highlights:{
      bullets:[
        "Full Stack web development",
        "Interactive Front End as per the design",
        "React",
        "JavaScript",
        "Building REST API",
        "Managing database"
      ],
      heading: "Here are a Few Highlights:"

    }  
  }
  const renderHighlight = ()=>{
    return(
      SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
        <div className='highlight' key={i}>
          <div className='highlight-blob'> </div>
<span>{value}</span>
         
        </div>
      ))
    )
  }
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
<div className='about-me-parent'>
  <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
  <div className='about-me-card'>
    <div className='about-me-profile'></div>
<div className='about-me-details'>
  <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
  <div className='about-me-highlights'>
    <div className='highlight-heading'>
      <span>{SCREEN_CONSTANTS.highlights.heading}</span>
    </div>
    {renderHighlight()}
  </div>
  <div className='about-me-options'>
  <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
                    <a href="Bani Banerjee (CV).pdf" download="Bani Banerjee (CV).pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
  </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default AboutMe