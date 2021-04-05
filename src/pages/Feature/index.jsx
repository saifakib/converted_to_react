import React from 'react'
import feature01 from '../../assets/images/features-icon-1.png'
import FeatureItem from '../../component/FeatureItem'

const p = "Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros."

export default function Feature() {
    return (
        <section className="section" id="features">
            <div className="container">
                <div className="row">
                    <FeatureItem feature={feature01} title="Initial Work" desc={p} />
                    <FeatureItem feature={feature01} title="Master Planning" desc={p} />
                    <FeatureItem feature={feature01} title="Smooth Execution" desc={p} />
                </div>
            </div>
        </section >
    )
}
