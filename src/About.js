import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FaUser, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';
import bgAbout from './Bckground/Aboutme.mp4';
import myImage from './Bckground/kim.jpg'; // Import your image here

const personalInfo = {
  name: 'KIMBERLY SANTIAGO',
  age: '20',
  birthday: 'July 28, 2003',
  address: 'South Villazar. Sipocot, Camarines Sur',
  hobbies: ['Watching series', 'Writing', 'Playing online games', 'Dancing and singing', 'Playing flute'],
  skills: ['Good Communication Skills', 'Resilience', 'Adaptability'],
};

const About = () => {
  const [showAge, setShowAge] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [text, setText] = useState('');

  const renderButtons = (title, icon, onClick) => (
    <Button variant="light" onClick={onClick}>
      <Row>
        <Col xs={2}>{icon}</Col>
        <Col>{title}</Col>
      </Row>
    </Button>
  );

  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    minHeight: '100vh',
    width: '100%',
    zIndex: -1,
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '80%',
    maxWidth: '1000px',
    padding: '0 20px',
    boxSizing: 'border-box',
    margin: '50px auto', 
    position: 'relative',
    zIndex: 1,
    fontFamily: 'Times New Roman',
    color: 'white',
    textAlign: 'left',
  };

  const imageStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    marginBottom: '20px', 
    position: 'fixed', 
    top: '50%', 
    right: '100px', 
    transform: 'translateY(-50%)',
  };
   
  

  return (
    <div className="about-section">
      <video autoPlay loop muted style={{ ...videoStyle, objectFit: 'cover' }}>
        <source src={bgAbout} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content" style={contentStyle}>
        {/* Add image here */}
        <img src={myImage} alt="My Image" style={imageStyle} />
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{personalInfo.name}</h2>
        <Row className="about-info">
          <Col xs={4}>{renderButtons('Age', <FaUser />, () => setShowAge(!showAge))}</Col>
          <Col xs={4}>{renderButtons('Birthday', <FaBirthdayCake />, () => setShowBirthday(!showBirthday))}</Col>
          <Col xs={4}>{renderButtons('Address', <FaMapMarkerAlt />, () => setShowAddress(!showAddress))}</Col>
        </Row>
        {showAge && <p>Age: {personalInfo.age} years old</p>}
        {showBirthday && <p>Birthday: {personalInfo.birthday}</p>}
        {showAddress && <p>Address: {personalInfo.address}</p>}
        <p className="typewriter" style={{ lineHeight: '1.6', marginTop: '20px' }}>{text}</p>
        <h3 style={{ fontSize: '1.5rem', marginTop: '20px' }}>Hobbies</h3>
        <ul>
          {personalInfo.hobbies && personalInfo.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <h3 style={{ fontSize: '1.5rem', marginTop: '20' }}>Skills</h3>
        <ul>
          {personalInfo.skills && personalInfo.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
