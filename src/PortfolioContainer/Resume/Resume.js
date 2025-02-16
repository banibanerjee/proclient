import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHanding/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOssSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      
    );
  };
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: "80" },
    { skill: "Node JS", ratingPercentage: "85" },
    { skill: "Express JS", ratingPercentage: "80" },
    { skill: "React JS", ratingPercentage: "70" },
    { skill: "MongoDb", ratingPercentage: "70" },
    { skill: "HTML", ratingPercentage: "80" },
    { skill: "CSS", ratingPercentage: "70" },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2025", toDate: "2025" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one ",
      subHeading: "Technologies Used: React JS , Bootsrap",
    },
   
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Maulana Abul Kalam Azad University of Technology"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE AND ENGINEERING"}
        fromDate={"2023"}
        toDate={"2026"}
      />
      <ResumeHeading
        heading={"West Bengal State Council of Technical Education"}
        subHeading={"DIPLOMA OF COMPUTER SCIENCE AND TECHNOLOGY"}
        fromDate={"2020"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"West Bengal Council of Higher Secondary Education"}
        subHeading={"HIGHER SECONDARY IN SCIENCE"}
        fromDate={"2020"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"West Bengal Council of Secondary Education"}
        subHeading={"SECONDARY EDUCATION"}
        fromDate={"2018"}
        toDate={"2018"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
       <div className="experience-description">
        <span className="resume-description-text">-Web Developer (Freelance & Personal Projects) | 2023 – Present
Built and deployed projects using React.js, and Node.js.</span>
        <br />
        <span className="resume-description-text">-Developed an admin dashboard with authentication and CRUD operations</span>
        <br />
        <span className="resume-description-text">-Integrated third-party APIs and worked with MongoDB and Firebase.</span>
        <br />
        <span className="resume-description-text">-Created an e-commerce website with Zustand for state management.</span>
        <br />
        <span className="resume-description-text">-Internship experience : Web Development using PHP & MySql of an 
Online Clearance System Project from Euphoria Infotech Privet Limited, 
kolkata</span>
      </div> 
      </div>,
      <div className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              >
            </div>
          </div>
          </div>
        ))}
        
      </div>,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Book Reading"
          description="Book reading, enhancing critical thinking, creativity, and continuous learning. "
        />
        <ResumeHeading
          heading="Listen Song"
          description="Active listener with a keen ability to understand, analyze, and engage in meaningful conversations."
        />
        <ResumeHeading
          heading="Cooking"
          description="Passionate about cooking, which enhances my creativity, patience, and attention to detail."
        />
        <ResumeHeading
          heading="Gardening"
          description="Passionate about gardening, which fosters patience, responsibility, and a deep appreciation for nature."
        />
      </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffet = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOssSetStyle(newCarousalOffet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

useEffect(()=>{
  return () =>{
    fadeInSubscription.unsubscribe();
  };
}, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
