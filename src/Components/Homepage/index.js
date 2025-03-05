import { useState } from 'react';
import './style.css';
import github from './github.png';
import linkedin from './linkedin.png'
import css3 from './css3.svg';
import html5 from './html5.svg';
import js from './js.svg';
import react from './reactjs.svg';
import node from './nodejs.svg';
import git from './git.svg';
import kibana from './kibana.svg';
import json from './json.svg';
import figma from './figma.svg';
import materialui from './materialui.svg';
import netlify from './netlify.svg';
import npm from './npm.svg';
import supabase from './supabase.svg';
import typescript from './typescript.svg';
import wordpress from './wordpress.svg';
import LeftBar from '../LeftBar';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import More from '../More';
export default function Landing() {

    const [page, setPage] = useState("landing");
    const [landing, setLanding] = useState("true");
    

    function homeButton() {
        setLanding("false");
        setPage("home");
    }

    function portfolioButton() {
        setLanding("false");
        setPage("portfolio");
    }

    function contactButton() {
        setLanding("false");
        setPage("contact");
    }

    function moreButton() {
        setLanding("false");
        setPage("more");
    }
    
    return (

        <div>


    {page === "landing" && 

        <div className="homeContainer">
            <div className="headings">
                <h1 onClick={homeButton} className="homeHeader">Home</h1>
                <h1 onClick={portfolioButton}className="homeHeader">Portfolio</h1>
                <h1 onClick={contactButton} className="homeHeader">Contact</h1>
                <h1 onClick={moreButton} className="homeHeader">More</h1>
            </div>
            <div className="briefBio">
                <p>Neil Brooks</p>
                <p>Junior Developer</p>
                <div className="socials">
                    <a href="aaa.com"><img class="monoSocialIcon" src={github} alt="social"></img></a>
                    <a href="aaa.com"><img class="monoSocialIcon"  src={linkedin} alt="social"></img></a>
                </div>
            </div>
        </div> }

        {page === "home" && 

            <div>

<LeftBar />

                
                <div className="homeInner">
                    <div className="innerBio">
                    <h1>Neil Brooks</h1>
                    <h2>Junior Developer with a speciality for scaleable, dynamic frontend design</h2>
                    </div>

                    <div className="stackOuterContainer">
                    <h3 className="techStack">Tech Stack</h3>

                    <div className="stackContainer">
                        
                            <div className="stackIconsColumn">
                                <h5>Core</h5>
                                <div className="stackIconsRow">
                                    <img className="stackIcon" src={html5} alt="html5"></img>
                                    <img className="stackIcon"  src={css3} alt="css3"></img>
                                    <img className="stackIcon"  src={js} alt="js"></img>
                                </div>
                            </div>

                            <div className="stackIconsColumn">
                            <h5>Javascript frameworks</h5>
                            <div className="stackIconsRow">
                                <img className="stackIcon"  src={react} alt="react"></img>
                                <img className="stackIcon"  src={node} alt="node"></img>
                                <img className="stackIcon"  src={typescript} alt="typescript"></img>
                                <img className="stackIcon"  src={npm} alt="npm"></img>
                            </div>
                            </div>
{/* 
                            <div className="stackIconsColumn">
                            <h5>Deployment</h5>
                            <div className="stackIconsRow">
                                <img className="stackIcon"  src={netlify} alt="netlify"></img>
                                <img className="stackIcon"  src={wordpress} alt="wordpress"></img>
                                <img className="stackIcon"  src={supabase} alt="supabase"></img>
                            </div>
                            </div>

                            <div className="stackIconsColumn">
                            <h5>Design</h5>
                            <div className="stackIconsRow">
                                <img className="stackIcon"  src={figma} alt="figma"></img>
                                <img className="stackIcon"  src={materialui} alt="materialui"></img>
                            </div>
                            </div>

                            <div className="stackIconsColumn">
                            <h5>Other</h5>
                            <div className="stackIconsRow">
                                <img className="stackIcon"  src={git} alt="git"></img>
                                <img className="stackIcon"  src={kibana} alt="kibana"></img>
                                <img className="stackIcon"  src={json} alt="json"></img>
                            </div>
                            </div> */}
                    </div>

                    <div className="stackContainer">
                    
                    <div className="stackIconsColumn">
                            <h5>Deployment</h5>
                            <div className="stackIconsRow">
                                <img className="stackIcon"  src={netlify} alt="netlify"></img>
                                <img className="stackIcon"  src={wordpress} alt="wordpress"></img>
                                <img className="stackIcon"  src={supabase} alt="supabase"></img>
                            </div>
                            </div>

                            <div className="stackIconsColumn">
                            <h5>Design</h5>
                            <div className="stackIconsRow">
                                <img className="stackIcon"  src={figma} alt="figma"></img>
                                <img className="stackIcon"  src={materialui} alt="materialui"></img>
                            </div>
                            </div>


                    </div>

                    <div className="stackContainer">

                    <div className="stackIconsColumn">
                            <h5>Other</h5>
                            <div className="stackIconsRow">
                                <img className="stackIcon"  src={git} alt="git"></img>
                                <img className="stackIcon"  src={kibana} alt="kibana"></img>
                                <img className="stackIcon"  src={json} alt="json"></img>
                            </div>
                            </div>

                    </div>
                    
                </div>

                </div>
                
            </div> 
            }

            {page === "portfolio" && <Portfolio /> }
            {page === "contact" && <Contact /> }
            {page === "more" && <More /> }

        </div>
    );
}
