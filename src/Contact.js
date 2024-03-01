import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import bgContact from './Bckground/toContact.mp4';
import './Contact.css';

const Contact = () => {
  const pageBackgroundStyle = {
    position: 'relative', 
    minHeight: '100vh',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  };

  const ContactIcon = ({ icon, link, color }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ margin: '10px', fontSize: '2rem', color: color }}>
      {icon}
    </a>
  );

  return (
    <div style={pageBackgroundStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src={bgContact} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={contentStyle}>
        <h2 className="contact-title">Hello there!</h2>
        <p className="contact-description">Thank you for visiting my personal website. I'd love to hear from you!</p>
        <p className="contact-description">Feel free to reach out to me through any of the following channels and social media accounts:</p>
        <div className="contact-icons">
          <ContactIcon icon={<FaEnvelope />} link="mailto:santiagokimberly028@gmail.com" color="white" />
          <ContactIcon icon={<FaPhone />} link="tel:09123456789" color="white" />
          <ContactIcon icon={<FaFacebookF />} link="https://www.facebook.com/profile.php?id=100069760071539&mibextid=ZbWKwL" color="white" />
          <ContactIcon icon={<FaTiktok />} link="https://www.tiktok.com/@asdfg_28hjkl?_t=8k5jyhBpMtV&_r=1&fbclid=IwAR0N8A3Xmg8w03A4_JUimWIJkCJJFAvfL0FDFfEv82DW72Ge0lszNjwIHMg" color="white" />
          <ContactIcon icon={<FaInstagram />} link="https://www.instagram.com/santiagokimberly028?igsh=b2NpM3d2aWhtOWhh&fbclid=IwAR2Jxg4VKbv1koWutBTfnHVQlSRkTXNtt_PwZvdpS37qYgOJM4_6ShVq5-I" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
