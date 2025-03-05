import React from 'react';
import landingVideo from '../Landing/Landing.mp4'; // Rename the import
import './style.css'; 
export default function Landing(props) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video 
                className="landingVideo"
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={landingVideo} type="video/mp4" />
            </video>
            
            <div className="buttonContainer">
                <h1 className="landingButtonHeader">Neil Brooks</h1>
                <h2 className="landingButtonSubheader">Junior Developer</h2>
                <button className="landingButton" onClick={() => props.setPage("home")}>
                    Click Me
                </button>
            </div>
        </div>
    );
}
