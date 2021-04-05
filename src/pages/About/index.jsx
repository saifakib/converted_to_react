import React from 'react'
import service01 from '../../assets/images/service-item-01.png'
import contact03 from '../../assets/images/contact-info-03.png'

import AboutServiceItem from '../../component/AboutServiceItem'

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div class="left-text-content">
                            <div class="section-heading">
                                <h6>About Us</h6>
                                <h2>We work with top brands and startups</h2>
                            </div>
                            <div class="row">

                                <AboutServiceItem service={service01} title="Top Notch" />
                                <AboutServiceItem service={service01} title="Robust" />
                                <AboutServiceItem service={contact03} title="Reliable" />
                                <AboutServiceItem service={contact03} title="Up-to-date" />

                                <div class="col-md-12">
                                    <a href="#" class="main-button-icon">
                                        Learn More <i class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="right-text-content">
                            <p>
                                is provided by TemplateMo for absolutely free of charge. You can download, edit and use this for your non-commercial and commercial websites.
                        <br />
                                Redistributing this template as a downloadable ZIP file on any template collection website is strictly prohibited. You will need to talk to us if you want to redistribute this template. Thank you.
                      <br />
                                This is a Bootstrap v4.3.1 CSS layout. Do you like it? You can feel free to
                       <a rel="nofollow noopener" href="https://templatemo.com/contact" target="_parent">talk to us</a>
                                if you have anything.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
