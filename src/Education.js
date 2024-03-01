import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css'; 
import bgEduc from './Bckground/Educbg.mp4';
import elementaryImage from './Bckground/elementary.jpg'; 
import juniorHighImage from './Bckground/junior_high.jpg'; 
import seniorHighImage from './Bckground/senior_high.jpg'; 
import collegeImage from './Bckground/College.jpg'; 
import elementaryLogo from './Bckground/srveslogo.png'; 
import juniorHighLogo from './Bckground/bnhslogo.png'; 
import seniorHighLogo from './Bckground/ktlalogo.png'; 
import collegeLogo from './Bckground/ncflogo.png'; 

const Education = () => {
  const [showElementaryImages, setShowElementaryImages] = useState(false);
  const [showJuniorHighImages, setShowJuniorHighImages] = useState(false);
  const [showSeniorHighImages, setShowSeniorHighImages] = useState(false);
  const [showCollegeImages, setShowCollegeImages] = useState(false);

  const toggleElementaryImages = () => {
    setShowElementaryImages(!showElementaryImages);
  };

  const toggleJuniorHighImages = () => {
    setShowJuniorHighImages(!showJuniorHighImages);
  };

  const toggleSeniorHighImages = () => {
    setShowSeniorHighImages(!showSeniorHighImages);
  };

  const toggleCollegeImages = () => {
    setShowCollegeImages(!showCollegeImages);
  };

  const pageBackgroundStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    minHeight: '100vh',
    width: '100%',
    zIndex: -1,
  };

  const contentStyle = {
    fontFamily: 'Times New Roman', 
   // bottom: '50px', 
    top: '0.5px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    maxWidth: '800px',
    padding: '20px',
    boxSizing: 'border-box',
    margin: '0 auto',
    zIndex: 1,
    textAlign: 'left',
    textShadow: '-5px -5px -5px black, -5px -5px -5px black, -5px -5px -5px black, -5px -5px -5px black', 
  };

  const educationItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
    color: 'white',
    width: '100%',
  };

  const textItemStyle = {
    fontFamily: 'Times New Roman', 
    color: 'white',
    textAlign: 'left',
    marginBottom: '5px',
    fontSize: '1.3rem',
    fontWeight: 'bold', 
    textShadow: '1px 1px 1px black, 1px 1px 1px black, 1px 1px 1px black, 1px 1px 1px black',
  };

  const graduationIconStyle = {
    fontSize: '2rem',
    marginRight: '20px',
    color: 'white',
    cursor: 'pointer',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    border: '2px solid black',
    borderRadius: '5px',
    marginBottom: '10px',
    opacity: showElementaryImages || showJuniorHighImages || showSeniorHighImages || showCollegeImages ? 1 : 0,
    transition: 'opacity 0.5s ease',
  };

  const logoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', 
    position: 'fixed',
    bottom: '50px', 
    top: '110px',
    right: '50px', 
    zIndex: 1, 
  };

  const logoStyle = {
    width: '100px', 
    height: 'auto',
    marginBottom: '10px', 
  };

  return (
    <div>
      <div className="education-container" style={pageBackgroundStyle}>
        <video autoPlay loop muted style={videoStyle}>
          <source src={bgEduc} type="video/mp4" />
        </video>
      </div>
      <div style={logoContainerStyle}>
        <img src={elementaryLogo} alt="Elementary Logo" style={logoStyle} />
        <img src={juniorHighLogo} alt="Junior High Logo" style={logoStyle} />
        <img src={seniorHighLogo} alt="Senior High Logo" style={logoStyle} />
        <img src={collegeLogo} alt="College Logo" style={logoStyle} />
      </div>
      <div className="content" style={contentStyle}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Educational Background</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '48%' }}>
            <div className="education-info" style={educationItemStyle}>
              <FaGraduationCap style={graduationIconStyle} onClick={toggleElementaryImages} />
              <div className="text-info" style={textItemStyle}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'white', fontWeight: 'bold' }}>Elementary School</h2>
                <p className="year" style={{ color: 'white' }}>2009 - 2015</p>
                <p className="school" style={{ color: 'white' }}>Soledad R. Villafuerte Elementary School</p>
              </div>
            </div>
            {showElementaryImages && <img src={elementaryImage} alt="Elementary School" style={imageStyle} />}
            <div className="education-info" style={educationItemStyle}>
              <FaGraduationCap style={graduationIconStyle} onClick={toggleJuniorHighImages} />
              <div className="text-info" style={textItemStyle}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'white', fontWeight: 'bold' }}>Junior High School</h2>
                <p className="year" style={{ color: 'white' }}>2015 - 2019</p>
                <p className="school" style={{ color: 'white' }}>Bolo Norte High School</p>
              </div>
            </div>
            {showJuniorHighImages && <img src={juniorHighImage} alt="Junior High School" style={imageStyle} />}
          </div>
          <div style={{ width: '48%' }}>
            <div className="education-info" style={educationItemStyle}>
              <FaGraduationCap style={graduationIconStyle} onClick={toggleSeniorHighImages} />
              <div className="text-info" style={textItemStyle}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'white', fontWeight: 'bold' }}>Senior High School</h2>
                <p className="year" style={{ color: 'white' }}>2019 - 2021</p>
                <p className="school" style={{ color: 'white' }}>King Thomas Learning Academy Inc.</p>
              </div>
            </div>
            {showSeniorHighImages && <img src={seniorHighImage} alt="Senior High School" style={imageStyle} />}
            <div className="education-info" style={educationItemStyle}>
              <FaGraduationCap style={graduationIconStyle} onClick={toggleCollegeImages} />
              <div className="text-info" style={textItemStyle}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'white', fontWeight: 'bold' }}>College</h2>
                <p className="year" style={{ color: 'white' }}>2021 - Present</p>
                <p className="school" style={{ color: 'white' }}>Naga College Foundation Inc.</p>
              </div>
            </div>
            {showCollegeImages && <img src={collegeImage} alt="College" style={imageStyle} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;