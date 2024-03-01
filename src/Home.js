import React from 'react';
import { motion } from 'framer-motion';
import bgHomevid from './Bckground/me.mp4'; // Ensure the path to your background video is correct
import myImage from './Bckground/kimberly.jpg'; 

const Home = () => {
   
    const imageStyle = {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        marginBottom: '20px',
        position: 'absolute',
        top: '40%',
        left: '0', // Adjusted to 'left'
        transform: 'translateY(-50%)',
        zIndex: 1, // ensure image stays above the video
    };

    return (
        <div
            style={{
                position: 'relative',
                minHeight: '80vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Use video element for video background */}
            <video autoPlay loop muted style={{ position: 'fixed', top: 0, left: 0, minHeight: '100vh', width: '100%', zIndex: -1 }}>
                <source src={bgHomevid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src={myImage} alt="My Image" style={imageStyle} />
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                style={{
                    color: 'white',
                    textAlign: 'center',
                    maxWidth: '500px',
                    padding: '0 20px',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60%',
                    fontFamily: 'Times New Roman',
                    zIndex: 2,
                }}
            >
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome, I'm Kim!</h1>
                <p style={{ fontSize: '2rem' }}>Thanks for visiting my personal website. Explore and enjoy!</p>
            </motion.div>
        </div>
    );
};

export default Home;
