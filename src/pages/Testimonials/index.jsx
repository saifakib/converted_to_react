import React from 'react'

import member1 from '../../assets/images/member-item-01.jpg'
import member2 from '../../assets/images/member-item-02.jpg'
import member3 from '../../assets/images/member-item-03.jpg'
import member4 from '../../assets/images/member-item-04.jpg'
import member5 from '../../assets/images/member-item-05.jpg'
import member6 from '../../assets/images/member-item-06.jpg'

import AuthorItem from '../../component/AuthorItem'

const members = [
    {
        img: member1,
        name: "White Cheese",
        title: "Digital Marketer",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        rss: "#"
    },
    {
        img: member2,
        name: "White Cheese",
        title: "Digital Marketer",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        rss: "#"
    },
    {
        img: member3,
        name: "White Cheese",
        title: "Digital Marketer",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        rss: "#"
    },
    {
        img: member4,
        name: "White Cheese",
        title: "Digital Marketer",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        rss: "#"
    },
    {
        img: member5,
        name: "White Cheese",
        title: "Digital Marketer",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        rss: "#"
    },
    {
        img: member6,
        name: "White Cheese",
        title: "Digital Marketer",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        rss: "#"
    },
]

export default function Testimonials() {
    return (
        <section className="section" id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h6>Digital Team</h6>
                            <h2>young and talented members</h2>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <div className="owl-carousel owl-theme">
                            {
                                members.map(member => {
                                    <AuthorItem
                                        img={member.img}
                                        name={member.name}
                                        title={member.title}
                                        f={member.facebook}
                                        t={member.twitter}
                                        l={member.linkedin}
                                        r={member.rss}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
