import "./FooterStyles.css"
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className='left'>
                    <div className="location">
                            <FaHome size={20} style={
                            {color: "#fff", marginRight: "2rem", verticalAlign: "middle"}}/>
                            <p style={{ display: "inline", color: "#fff" }}>
                                New York, NY
                            </p>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={
                                {color: "#fff", marginRight: "2rem",  verticalAlign: "middle"}}/>
                            JosephSzpigiel@gmail.com
                        </h4>

                    </div>
                </div>
                <div className='right'>
                    <h4>Joseph Szpigiel</h4>
                    <p>FullStack Developer</p>
                    <div className="social">
                        <h4>
                            <FaLinkedin size={20} style={
                                {color: "#fff", marginRight: "1rem",  verticalAlign: "middle"}}/> 
                                linkedin.com/JosephSzpigiel
                        </h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer