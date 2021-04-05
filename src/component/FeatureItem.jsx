import React from 'react'

export default function FeatureItem({ feature, title, desc }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <div className="features-item">
                <div className="features-icon">
                    <img src={feature} alt="" />
                </div>
                <div className="features-content">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <a href="#" className="text-button-icon">
                        Learn More <i className="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
