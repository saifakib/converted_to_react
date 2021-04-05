import React from 'react'

export default function AuthorItem({ img, name, title, f, t, l, r }) {
    return (
        <div className="item author-item">
            <div className="member-thumb">
                <img src={img} alt="" />
                <div className="hover-effect">
                    <div className="hover-content">
                        <ul>
                            <li><a href={f}><i className="fa fa-facebook"></i></a></li>
                            <li><a href={t}><i className="fa fa-twitter"></i></a></li>
                            <li><a href={l}><i className="fa fa-linkedin"></i></a></li>
                            <li><a href={r}><i className="fa fa-rss"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h4>{name}</h4>
            <span>{title}</span>
        </div>
    )
}
