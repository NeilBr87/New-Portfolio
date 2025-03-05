import React from 'react';
import LeftBar from '../LeftBar'
import './style.css';

export default function Portfolio() {
    return (
        <div className="homeInner">
            <LeftBar />
            <div className="portfolioInner">
                <h1 className="portfolioHeader">Portfolio</h1>
            </div>
        </div>
    );
}