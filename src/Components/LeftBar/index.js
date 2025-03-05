import React from 'react';
import './style.css';
export default function LeftBar(props) {
    return (
        <div className="leftBarContainer">
            <div className="leftBarInner">
                <h1 className="leftBarHeader">Home</h1>
                <h1 className="leftBarHeader">Portfolio</h1>
                <h1 className="leftBarHeader">Contact</h1>
                <h1 className="leftBarHeader">More</h1>
            </div>
        </div>
    );
}