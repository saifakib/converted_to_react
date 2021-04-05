import React from 'react'

export default function Item({ slide, h5text, h3text }) {
    return (
        <div className="item">
            <div className="img-fill">
                <img src={slide} alt="" />
                <div className="text-content">
                    <h3>{h3text}</h3>
                    <h5>{h5text}</h5>
                    <a href="#" className="main-stroked-button">Learn More</a>
                    <a href="#" className="main-filled-button">Get It Now</a>
                </div>
            </div>
        </div>
    )
}