import  "./HeroImageStyles.css"
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImage = () => {
    return (
        <div  className="hero">
            <div className="mask">
                <img className="intro-img"
                src={IntroImg} alt="IntroImg"/>
            </div>
            <div className='content'>
                <p>HI, I'M A FREELANCER</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/projects"
                    className="btn">Projects</Link>
                    <Link to="/contact"
                    className="btn btn-light">Contact</Link>
                </div>

            </div>
        </div>
    )
}

export default HeroImage