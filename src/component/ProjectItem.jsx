import React from 'react'

export default function ProjectItem({ img }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
            <div className="item">
                <a href={img} data-lightbox="image-1" data-title="Our Projects"><img src={img} alt="" /></a>
            </div>
        </div>
    )
}
