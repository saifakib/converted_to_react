import React from 'react'

export default function ContactForm() {
    return (
        <div className="contact-form">
            <form id="contact" action="" method="get">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <fieldset>
                            <input name="name" type="text" id="name" placeholder="Your Name *" required="" />
                        </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <fieldset>
                            <input name="phone" type="text" id="phone" placeholder="Your Phone" required="" />
                        </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <fieldset>
                            <input name="email" type="email" id="email" placeholder="Your Email *" required="" />
                        </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <fieldset>
                            <input name="subject" type="text" id="subject" placeholder="Subject" />
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                            <textarea name="message" rows="6" id="message" placeholder="Message" required="" />
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                            <button type="submit" id="form-submit" className="main-button-icon">Send Message Now <i className="fa fa-arrow-right"></i></button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    )
}
