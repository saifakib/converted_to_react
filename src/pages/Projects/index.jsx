import React from 'react'
import pro1 from '../../assets/images/project-big-item-01.jpg'
import pro2 from '../../assets/images/project-big-item-02.jpg'
import pro3 from '../../assets/images/project-big-item-03.jpg'
import pro4 from '../../assets/images/project-big-item-04.jpg'
import pro5 from '../../assets/images/project-big-item-05.jpg'
import pro6 from '../../assets/images/project-big-item-06.jpg'

import ProjectItem from '../../component/ProjectItem'

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="section-heading">
                            <h6>Our Projects</h6>
                            <h2>Some of our latest projects</h2>
                        </div>
                        <div className="filters">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".des">Web Design</li>
                                <li data-filter=".dev">Web Development</li>
                                <li data-filter=".gra">Graphics</li>
                                <li data-filter=".tsh">Artworks</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="filters-content">
                            <div className="row grid">
                                <ProjectItem img={pro1} />
                                <ProjectItem img={pro2} />
                                <ProjectItem img={pro3} />
                                <ProjectItem img={pro4} />
                                <ProjectItem img={pro5} />
                                <ProjectItem img={pro6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
