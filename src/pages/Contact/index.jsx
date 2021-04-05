import React from 'react'


import con1 from '../../assets/images/contact-info-01.png'
import con2 from '../../assets/images/contact-info-02.png'
import con3 from '../../assets/images/contact-info-03.png'

import ContactForm from '../../component/ContactForm'

export default function Contact() {
    return (
        <section className="section" id="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="left-text-content">
                            <div className="section-heading">
                                <h6>Contact Us</h6>
                                <h2>Feel free to keep in touch with us!</h2>
                            </div>
                            <ul className="contact-info">
                                <li><img src={con1} alt="" />010-020-0860</li>
                                <li><img src={con2} alt="" />info@company.com</li>
                                <li><img src={con3} alt="" />www.company.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-xs-12">
                       <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
