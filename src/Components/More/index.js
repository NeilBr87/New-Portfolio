import React from 'react';
import LeftBar from '../LeftBar'
import './style.css';

export default function More() {
    return (
        <div className="homeInner">
            <LeftBar />
            <div className="moreInner">
                <h1 className="moreHeader">More</h1>
            </div>
        </div>
    );
}