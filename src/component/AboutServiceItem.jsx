import React from 'react'

export default function AboutServiceItem({ service, title }) {
    return (
        <div class="col-md-6 col-sm-6">
            <div class="service-item">
                <img src={service} alt="" />
                <h4>{title}</h4>
            </div>
        </div>
    )
}
