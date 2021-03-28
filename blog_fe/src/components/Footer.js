import React from "react";
import '../css/Footer.css';


export default function Footer(props) {
    return (
        <div className="footer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="nav-link" href="https://www.troleary.com">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-font" href="https://www.troleary.com/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.github.com/tom-oleary" target="_blank">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/tom-oleary19/" target="_blank">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-font" href="https://www.troleary.com/resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}