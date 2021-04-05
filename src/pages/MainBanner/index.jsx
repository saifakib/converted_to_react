import React from 'react'
import slide01 from '../../assets/images/slide-01.jpg'
import slide03 from '../../assets/images/slide-03.jpg'
import BannerItem from '../../component/BannerItem'

export default function MainBanner() {
    return (
        <>
            <div className="main-banner header-text" id="top">
                <div className="Modern-Slider">
                    <BannerItem slide={slide01} h3text="Welcome To Breezed" h5text="New Bootstrap Template" />
                    {/** <BannerItem slide={slide03} h3text="High Performance" h5text="Robust and Speedy" /> */}
                </div>
            </div>
            <div className="scroll-down scroll-to-section">
                <a href="#about">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>
        </>
    )
}
